import { rm } from 'fs/promises';
import cloudinary from 'cloudinary';
import { db } from '@/server/db/clientDB';
import { receiveProfileService } from '@/server/api/profile/service';

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

export const uploadCloudinaryService = async (customerId: number, url: string | string[]) => {
  cloudinary.v2.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
  });

  let cloudinaryResponse;

  try {
    if (typeof url === 'string') {
      cloudinary.v2.url;
      cloudinaryResponse = await cloudinary.v2.uploader.upload(url);
      await receiveProfileService(customerId);
      await uploadImageProfileService(customerId, cloudinaryResponse.url);
      await rm(url);
      return cloudinaryResponse.url;
    }
    return '';
  } catch (error) {
    if (error instanceof Error) {
      if (typeof url === 'string') {
        await rm(url);
      }
      return { error: error.message, url: cloudinaryResponse?.url };
    } else {
      return { error: 'Cloudinary store error', url: cloudinaryResponse?.url };
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
