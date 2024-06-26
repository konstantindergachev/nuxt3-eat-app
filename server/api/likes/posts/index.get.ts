import { receiveLikeService } from './service';
import { IPostLikeResponseError, IPostLikeStore } from '~~/interfaces/postlike';
import { NOT_LIKES } from '~~/stub/constants';

export default defineEventHandler(
  async (event): Promise<IPostLikeStore | IPostLikeResponseError> => {
    const customerId = getCookie(event, 'id');
    try {
      return await receiveLikeService(Number(customerId));
    } catch (error) {
      if (error instanceof Error) {
        return { error: error.message };
      } else {
        return { error: NOT_LIKES };
      }
    }
  }
);
