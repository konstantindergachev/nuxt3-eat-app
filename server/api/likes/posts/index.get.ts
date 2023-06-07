import { getCookie } from 'h3';
import { receiveLikeService } from './service';
import { IPostLikeResponseError, IPostLikeStore } from '@/interfaces/postlike';

export default defineEventHandler(
  async (event): Promise<IPostLikeStore | IPostLikeResponseError> => {
    const customerId = getCookie(event, 'id');
    try {
      return receiveLikeService(Number(customerId));
    } catch (error) {
      if (error instanceof Error) {
        return { error: error.message };
      } else {
        return { error: `You don't have an any likes` };
      }
    }
  }
);
