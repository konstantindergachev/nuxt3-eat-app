import { usePostLikeStore } from '@/stores/like';
import { IPostLike, IPostLikeStore, IPostLikeResponseError } from '@/interfaces/postlike';
import { UNAUTHORIZED } from '@/stub/constants';

export const usePostLike = async () => {
  const { data, error } = await useFetch<IPostLikeStore | IPostLikeResponseError>(
    '/api/likes/posts'
  );

  const _like = reactive({
    isLiked: false,
    postId: 0,
  });
  const errors = reactive({
    postId: 0,
    postLikeError: '',
    commonLikeError: '',
  });

  if (error) errors.commonLikeError = error.value?.data.message;

  const auth = useAuth();
  const storeLike = usePostLikeStore();

  if (data) {
    const likesFromDB = data.value as IPostLikeStore;
    storeLike.addToLikesFromDB(likesFromDB);
  }

  const likes = computed(() => storeLike.getLikes);

  const saveLike = async (likeInfo: IPostLike) => {
    const response: IPostLike = await $fetch('/api/likes/posts', {
      method: 'post',
      body: JSON.stringify(likeInfo),
    });

    storeLike.addToLikes({ postId: response.postId, isLiked: response.isLiked });
  };
  const handleLike = (postId: number) => {
    if (auth.value.isAuthenticated && postId) {
      _like.postId = postId;
      _like.isLiked = likes.value.postLikes[postId];
      _like.isLiked = likes.value.postLikes[postId] ? false : true;

      saveLike(_like);
    } else {
      errors.postId = postId;
      errors.postLikeError = UNAUTHORIZED;
    }
  };

  return {
    likes: likes.value.postLikes,
    handleLike,
    errors,
  };
};
