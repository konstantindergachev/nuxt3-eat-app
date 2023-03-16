import { ICheckoutOrder } from '@/interfaces/checkout';
import { checkoutService } from './service';

export default defineEventHandler(async (event): Promise<string> => {
  const body: ICheckoutOrder = await readBody(event);
  const id = getCookie(event, 'id');

  return await checkoutService(body, Number(id));
});
