import { rm } from 'fs/promises';
import cloudinary from 'cloudinary';
import { db } from '@/server/db/clientDB';
import { receiveProfileService } from '@/server/api/profile/service';

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

export const uploadCloudinaryService = async (
  customerId: number,
  url: string | string[]
): Promise<string> => {
  try {
    await receiveProfileService(customerId);
  } catch (error) {
    if (error instanceof Error) {
      if (typeof url === 'string') {
        await rm(url);
      }
      return error.message;
    } else {
      return 'Unexpected error';
    }
  }

  cloudinary.v2.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
  });

  try {
    if (typeof url === 'string') {
      const data = await cloudinary.v2.uploader.upload(url);
      await uploadImageProfileService(customerId, data.url);
      await rm(url);
      return data.url;
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

const uploadImageProfileService = async (
  customerId: number,
  url: string
): Promise<{ status: number; statusText: string }> => {
  const dbResponse = await db.from('profiles').update({ img: url }).eq('customer_id', customerId);
  return { status: dbResponse.status, statusText: dbResponse.statusText };
};
