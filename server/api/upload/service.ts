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
      const { asset_id, url: imgUrl } = cloudinaryResponse;
      await receiveProfileService(customerId);
      await uploadImageProfileService(customerId, imgUrl, asset_id);
      await rm(url);
      return cloudinaryResponse.url;
    }
    return '';
  } catch (error) {
    if (error instanceof Error) {
      if (typeof url === 'string') {
        await rm(url);
      }
      return {
        error: error.message,
        imgUrl: cloudinaryResponse?.url,
        imgId: cloudinaryResponse?.asset_id,
      };
    } else {
      return {
        error: 'Cloudinary store error',
        imgUrl: cloudinaryResponse?.url,
        imgId: cloudinaryResponse?.asset_id,
      };
    }
  }
};

const uploadImageProfileService = async (
  customerId: number,
  imgUrl: string,
  imgId: string
): Promise<{ status: number; statusText: string }> => {
  const dbResponse = await db
    .from('profiles')
    .update({ img: imgUrl, img_id: imgId })
    .eq('customer_id', customerId);
  return { status: dbResponse.status, statusText: dbResponse.statusText };
};
