import { updateProfileService } from './service';
import { IUpdateProfileDBResponse } from '~~/interfaces/profile';

export default defineEventHandler(async (event): Promise<IUpdateProfileDBResponse> => {
  const body = await readBody(event);
  const customerId = getCookie(event, 'id');
  return updateProfileService(Number(customerId), body);
});
