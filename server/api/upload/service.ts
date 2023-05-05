import { rm } from 'fs/promises';
import cloudinary from 'cloudinary';

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

export const uploadCloudinaryService = async (url: string | string[]): Promise<string> => {
  cloudinary.v2.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
  });

  try {
    if (typeof url === 'string') {
      const data = await cloudinary.v2.uploader.upload(url);
      await rm(url);
      return data.type;
    }
    return '';
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Cloudinary store error');
    }
  }
};
