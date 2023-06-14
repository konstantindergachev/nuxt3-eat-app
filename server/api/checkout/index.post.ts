import { checkoutService } from './service';
import { ICheckoutOrder } from '~~/interfaces/checkout';

export default defineEventHandler(async (event): Promise<string> => {
  const body: ICheckoutOrder = await readBody(event);
  const id = getCookie(event, 'id');

  return await checkoutService(body, Number(id));
});
