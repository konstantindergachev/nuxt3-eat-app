import { receiveProfileService } from './service';
import { IReceiveProfileFromDB } from '@/interfaces/profile';

export default defineEventHandler(async (event): Promise<IReceiveProfileFromDB | string> => {
  const customerId = getCookie(event, 'id');
  try {
    const dbResponse = await receiveProfileService(Number(customerId));
    return dbResponse;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return 'Unexpected error';
    }
  }
});
