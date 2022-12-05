import { slides } from '@/stub/about';
import { ISlides } from '@/interfaces/about';

export default defineEventHandler((event): ISlides => {
  return { slides };
});
