import { IBanner } from '~~/interfaces/banner';
import { banner } from '~~/stub/thebanner';

export default defineEventHandler((event): IBanner | string => {
  return banner;
});
