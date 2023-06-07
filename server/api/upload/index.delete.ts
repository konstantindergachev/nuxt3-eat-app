import { getCookie } from 'h3';
import { destroyCloudinaryService } from './service';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const customerId = getCookie(event, 'id');
    return await destroyCloudinaryService(Number(customerId), body);
  } catch (error) {
    if (error instanceof Error) {
      console.error({ error: error.message });
    } else {
      console.error({ error: 'Unexpectide server error' });
    }
  }
});
