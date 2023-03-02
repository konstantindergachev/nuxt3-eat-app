import { orderService } from './service';
import { IOrder } from '@/interfaces/orders';

export default defineEventHandler(async (event): Promise<IOrder[] | string> => {
  const response = await orderService();
  return response;
});
