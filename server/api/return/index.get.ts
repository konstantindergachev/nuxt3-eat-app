import { returnRefundService } from './service';
import { IReturnRefund } from '~~/interfaces/return';

export default defineEventHandler(async (event): Promise<IReturnRefund[]> => {
  return returnRefundService();
});
