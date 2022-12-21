import { IBanner } from '@/interfaces/thebanner';
import { banner } from '@/stub/thebanner';

export default defineEventHandler((event): IBanner | string => {
  return banner;
});
