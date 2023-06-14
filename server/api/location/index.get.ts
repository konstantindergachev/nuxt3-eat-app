import { location } from '~~/stub/location';
import { ILocation } from '~~/interfaces/location';

export default defineEventHandler((event): ILocation => {
  return { ...location };
});
