import { privacy } from '@/stub/privacy';
import { IPrivacy } from '@/interfaces/privacy';

export default defineEventHandler((event): IPrivacy[] => {
  return privacy;
});
