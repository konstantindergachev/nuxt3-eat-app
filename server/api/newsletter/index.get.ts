import { INewsletter } from '~~/interfaces/newsletter';
import { newsletter } from '~~/stub/newsletter';

export default defineEventHandler((event): INewsletter | string => {
  return newsletter;
});
