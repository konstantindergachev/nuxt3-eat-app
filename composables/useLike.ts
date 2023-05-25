import { useStoreLike } from '@/stores/like';
import { ILikeInfo, IPiniaLikeInfo, ILikeResponseErrorFromDB } from '@/interfaces/like';

export const useLike = async () => {
  const { data, error } = await useFetch<IPiniaLikeInfo | ILikeResponseErrorFromDB>('/api/likes');

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
  const storeLike = useStoreLike();

  if (data) {
    const likesFromDB = data.value as IPiniaLikeInfo;
    storeLike.addToLikesFromDB(likesFromDB);
  }

  const likes = computed(() => storeLike.getLikes);

  const saveLike = async (likeInfo: ILikeInfo) => {
    const response: ILikeInfo = await $fetch('/api/likes', {
      method: 'post',
      body: JSON.stringify(likeInfo),
    });

    storeLike.addToLikes({ postId: response.postId, isLiked: response.isLiked });
  };
  const handleLike = (postId: number) => {
    if (auth.value.isAuthenticated && postId) {
      _like.postId = postId;
      _like.isLiked = likes.value.likes[postId];
      _like.isLiked = likes.value.likes[postId] ? false : true;

      saveLike(_like);
    } else {
      errors.postId = postId;
      errors.postLikeError = 'You need to be an authorized.';
    }
  };

  return {
    likes: likes.value.likes,
    handleLike,
    errors,
  };
};
