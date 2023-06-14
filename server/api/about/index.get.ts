import { about } from '~~/stub/about';
import { IAbout } from '~~/interfaces/about';

export default defineEventHandler((event): IAbout => {
  return { ...about };
});
