import { createReviewService } from './service';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const customerId = getCookie(event, 'id');
  return createReviewService(Number(customerId), body);
});
