import { receiveLikeService } from './service';
import { IFruitLikeResponseError, IFruitLikeStore } from '~~/interfaces/fruitlike';
import { NOT_LIKES } from '~~/stub/constants';

export default defineEventHandler(
  async (event): Promise<IFruitLikeStore | IFruitLikeResponseError> => {
    const customerId = getCookie(event, 'id');
    try {
      return receiveLikeService(Number(customerId));
    } catch (error) {
      if (error instanceof Error) {
        return { error: error.message };
      } else {
        return { error: NOT_LIKES };
      }
    }
  }
);
