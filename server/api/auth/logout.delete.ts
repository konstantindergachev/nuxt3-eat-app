import { LOG_OUT_SUCCESS } from '@/stub/constants';

export default defineEventHandler((event) => {
  deleteCookie(event, 'id');
  deleteCookie(event, 'auth');
  return LOG_OUT_SUCCESS;
});
