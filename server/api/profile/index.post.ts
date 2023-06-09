import { createProfileService } from './service';
import { IUpdateProfileDBResponse } from '~~/interfaces/profile';

export default defineEventHandler(async (event): Promise<IUpdateProfileDBResponse> => {
  const body = await readBody(event);
  const customerId = getCookie(event, 'id');
  return createProfileService(body, Number(customerId));
});
