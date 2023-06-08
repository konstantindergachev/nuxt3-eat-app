import { orderService } from './service';
import { IOrder } from '@/interfaces/orders';
import { SOMETHING_WENT_WRONT } from '@/stub/constants';

export default defineEventHandler(async (event): Promise<IOrder[] | string> => {
  const id = getCookie(event, 'id');
  try {
    return await orderService(Number(id));
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return SOMETHING_WENT_WRONT;
    }
  }
});
