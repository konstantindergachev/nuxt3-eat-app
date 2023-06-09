import { reviewsService, postsService } from './service';
import { ISlide, IPost } from '~~/interfaces/review';

export default defineEventHandler(async (event): Promise<{ reviews: ISlide[]; posts: IPost[] }> => {
  const reviewsPromise = reviewsService();
  const postsPromise = postsService();
  const [reviewsResponse, postsResponse] = (await Promise.all([reviewsPromise, postsPromise])) as [
    ISlide[],
    IPost[]
  ];
  return { reviews: reviewsResponse, posts: postsResponse };
});
