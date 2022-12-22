import { IRecommendation } from '@/interfaces/recommendation';
import { recommendation } from '@/stub/recommendation';

export default defineEventHandler((event): IRecommendation | string => {
  return recommendation;
});
