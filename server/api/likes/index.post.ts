import { createLikeService } from './service';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const customerId = getCookie(event, 'id');
  return createLikeService(body, Number(customerId));
});
