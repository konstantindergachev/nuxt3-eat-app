import { getCookie } from 'h3';
import { orderService } from './service';
import { IOrder } from '@/interfaces/orders';

export default defineEventHandler(async (event): Promise<IOrder[] | string> => {
  const id = getCookie(event, 'id');
  try {
    return await orderService(Number(id));
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return 'Something went wrong. please try later.';
    }
  }
});
