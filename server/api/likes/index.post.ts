import { createLikeService } from './service';
import { ILikeInfo } from '@/interfaces/like';

export default defineEventHandler(async (event) => {
  const body: ILikeInfo = await readBody(event);

  const customerId = getCookie(event, 'id');
  return createLikeService(body, Number(customerId));
});
