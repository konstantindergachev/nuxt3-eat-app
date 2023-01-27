import { orders } from '@/stub/orders';
import { IOrder } from '@/interfaces/orders';

export default defineEventHandler((event): IOrder[] => {
  return orders;
});
