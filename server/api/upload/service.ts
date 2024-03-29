import { rm } from 'fs/promises';
import cloudinary from 'cloudinary';
import { db } from '~~/server/db/clientDB';
import { receiveProfileService } from '~~/server/api/profile/service';
import { NOT_CLOUDINARY } from '~~/stub/constants';

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

cloudinary.v2.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

export const uploadCloudinaryService = async (customerId: number, url: string | string[]) => {
  let cloudinaryResponse;

  try {
    if (typeof url === 'string') {
      cloudinary.v2.url;
      cloudinaryResponse = await cloudinary.v2.uploader.upload(url, { folder: 'profile' });
      const { public_id, url: imgUrl } = cloudinaryResponse;
      await receiveProfileService(customerId);
      await uploadImageProfileService(customerId, imgUrl, public_id);
      await rm(url);
      return { imgUrl: cloudinaryResponse.url, imgId: cloudinaryResponse.public_id };
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
        imgId: cloudinaryResponse?.public_id,
      };
    } else {
      return {
        error: NOT_CLOUDINARY,
        imgUrl: cloudinaryResponse?.url,
        imgId: cloudinaryResponse?.public_id,
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

export const destroyCloudinaryService = async (
  customerId: number,
  imageId: string
): Promise<{ result: string } | { error: string }> => {
  try {
    const cloudinaryResponse = await cloudinary.v2.uploader.destroy(imageId);
    if (cloudinaryResponse.hasOwnProperty('result')) {
      await db.from('profiles').update({ img: '', img_id: '' }).eq('customer_id', customerId);
    }
    return cloudinaryResponse;
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: NOT_CLOUDINARY };
    }
  }
};
