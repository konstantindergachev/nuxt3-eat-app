import { receiveLikeService, createLikeService, updateLikeService } from './service';
import { IFruitLike } from '~~/interfaces/fruitlike';
import { NOT_LIKES } from '~~/stub/constants';

export default defineEventHandler(async (event) => {
  const body: IFruitLike = await readBody(event);
  const customerId = getCookie(event, 'id');

  try {
    const likes = await receiveLikeService(Number(customerId));

    if (likes[body.fruitId]) {
      return (await updateLikeService(body, Number(customerId))) as IFruitLike;
    } else if (likes[body.fruitId] === undefined) {
      return createLikeService(body, Number(customerId));
    } else if (!likes[body.fruitId]) {
      return (await updateLikeService(body, Number(customerId))) as IFruitLike;
    }
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === NOT_LIKES) {
        return createLikeService(body, Number(customerId));
      }
    }
  }
});
