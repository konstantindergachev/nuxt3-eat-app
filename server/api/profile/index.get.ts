import { receiveProfileService } from './service';
import { IReceiveProfileFromDB } from '@/interfaces/profile';

export default defineEventHandler(async (event): Promise<IReceiveProfileFromDB | string> => {
  const customerId = getCookie(event, 'id');
  const dbResponse = receiveProfileService(Number(customerId));
  return dbResponse;
});
