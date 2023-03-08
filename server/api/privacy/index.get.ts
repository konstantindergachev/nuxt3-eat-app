import { IPrivacy } from '@/interfaces/privacy';
import { privacyService } from './service';

export default defineEventHandler(async (event): Promise<IPrivacy[]> => {
  return privacyService();
});
