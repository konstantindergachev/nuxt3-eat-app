import { IReturnRefund } from '@/interfaces/return';
import { returnRefundService } from './service';

export default defineEventHandler(async (event): Promise<IReturnRefund[]> => {
  return returnRefundService();
});
