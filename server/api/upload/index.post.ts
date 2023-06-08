import { mkdir, stat } from 'fs/promises';
import { join } from 'path';
import formidable, { Files } from 'formidable';
import { uploadCloudinaryService } from './service';
import { UNEXPECTED } from '@/stub/constants';

export default defineEventHandler(async (event) => {
  const customerId = getCookie(event, 'id');
  try {
    let body;
    const headers = getRequestHeaders(event);
    if (headers['content-type']?.includes('multipart/form-data')) {
      body = await parseMultipartNodeRequest(event.node.req);
      const { file } = body as Files;
      const url = Array.isArray(file) ? file.map((f) => f.filepath) : file.filepath;
      const response = await uploadCloudinaryService(Number(customerId), url);
      return response;
    }
    return await readBody(event);
  } catch (error) {
    if (error instanceof Error) {
      console.error({ error: error.message });
    } else {
      console.error({ error: UNEXPECTED });
    }
  }
});

const parseMultipartNodeRequest = (req: any) => {
  return new Promise(async (resolve, reject) => {
    const uploadDir = createUploadDir();
    try {
      await stat(uploadDir);
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        await mkdir(uploadDir, { recursive: true });
      } else {
        console.error(error);
        reject(error);
        return;
      }
    }

    const form = formidable({
      uploadDir,
      filename: (_name, _ext, part): string => {
        const extention = part.originalFilename?.split('.')[1];
        const uniqueSuffix = createUniqueSuffix();
        const filename = `${part.name || 'unknown'}-${uniqueSuffix}.${extention || 'unknown'}`;
        return filename;
      },
      filter: (part) => {
        return part.name === 'file' && (part.mimetype?.includes('image') || false);
      },
    });
    form.parse(req, function (err, fields, files) {
      if (err) reject(err);
      else resolve({ ...fields, ...files });
    });
  });
};

const createUploadDir = (): string => {
  return join(process.env.ROOT_DIR || process.cwd(), `/public/uploads`);
};

const createUniqueSuffix = (): string => {
  return `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
};
