import { privacyService } from './service';
import { IPrivacy } from '~~/interfaces/privacy';

export default defineEventHandler(async (event): Promise<IPrivacy[]> => {
  return privacyService();
});
