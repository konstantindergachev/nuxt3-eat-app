import { receiveLikeService } from './service';
import { ILikeResponseErrorFromDB, IPiniaLikeInfo } from '@/interfaces/like';

export default defineEventHandler(
  async (event): Promise<IPiniaLikeInfo | ILikeResponseErrorFromDB> => {
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
