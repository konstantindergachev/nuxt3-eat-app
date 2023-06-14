import { db } from '~~/server/db/clientDB';
import { IReturnRefund } from '~~/interfaces/return';

export const returnRefundService = async (): Promise<IReturnRefund[]> => {
  const { data } = await db.from('refunds').select();
  return data as IReturnRefund[];
};
