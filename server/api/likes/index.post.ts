import { receiveLikeService, createLikeService, updateLikeService } from './service';
import { ILikeInfo } from '@/interfaces/like';

export default defineEventHandler(async (event) => {
  const body: ILikeInfo = await readBody(event);
  const customerId = getCookie(event, 'id');

  const likes = await receiveLikeService(Number(customerId));

  if (likes[body.postId]) {
    return (await updateLikeService(body, Number(customerId))) as ILikeInfo;
  } else if (likes[body.postId] === undefined) {
    return createLikeService(body, Number(customerId));
  } else if (!likes[body.postId]) {
    return (await updateLikeService(body, Number(customerId))) as ILikeInfo;
  }
});
