import { receiveLikeService, createLikeService, updateLikeService } from './service';
import { IPostLike } from '~~/interfaces/postlike';

export default defineEventHandler(async (event) => {
  const body: IPostLike = await readBody(event);
  const customerId = getCookie(event, 'id');

  const likes = await receiveLikeService(Number(customerId));

  if (likes[body.postId]) {
    return (await updateLikeService(body, Number(customerId))) as IPostLike;
  } else if (likes[body.postId] === undefined) {
    return createLikeService(body, Number(customerId));
  } else if (!likes[body.postId]) {
    return (await updateLikeService(body, Number(customerId))) as IPostLike;
  }
});
