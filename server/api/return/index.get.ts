import { returnRefund } from '@/stub/return';
import { IReturnRefund } from '@/interfaces/return';

export default defineEventHandler((event): IReturnRefund[] => {
  return returnRefund;
});
