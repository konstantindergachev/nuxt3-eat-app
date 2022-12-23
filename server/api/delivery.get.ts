import { IDelivery } from '@/interfaces/delivery';
import { delivery } from '@/stub/delivery';

export default defineEventHandler((event): IDelivery | string => {
  return delivery;
});
