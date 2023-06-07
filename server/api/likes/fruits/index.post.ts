import { getCookie } from 'h3';
import { receiveLikeService, createLikeService, updateLikeService } from './service';
import { IFruitLike } from '@/interfaces/fruitlike';

export default defineEventHandler(async (event) => {
  const body: IFruitLike = await readBody(event);
  const customerId = getCookie(event, 'id');

  const likes = await receiveLikeService(Number(customerId));

  if (likes[body.fruitId]) {
    return (await updateLikeService(body, Number(customerId))) as IFruitLike;
  } else if (likes[body.fruitId] === undefined) {
    return createLikeService(body, Number(customerId));
  } else if (!likes[body.fruitId]) {
    return (await updateLikeService(body, Number(customerId))) as IFruitLike;
  }
});
