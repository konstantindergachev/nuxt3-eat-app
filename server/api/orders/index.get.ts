import { orderService } from './service';
import { IOrder } from '@/interfaces/orders';

export default defineEventHandler(async (event): Promise<IOrder[] | string> => {
  const id = getCookie(event, 'id');
  const response = await orderService(Number(id));
  return response;
});
