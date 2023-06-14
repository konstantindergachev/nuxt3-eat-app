import { useFruitLikeStore } from '~~/stores/like';
import { IFruitLike, IFruitLikeStore, IFruitLikeResponseError } from '~~/interfaces/fruitlike';
import { UNAUTHORIZED } from '~~/stub/constants';

export const useFruitLike = async () => {
  const { data, error } = await useFetch<IFruitLikeStore | IFruitLikeResponseError>(
    '/api/likes/fruits'
  );

  const _like = reactive({
    isLiked: false,
    fruitId: 0,
  });
  const errors = reactive({
    postId: 0,
    postLikeError: '',
    commonLikeError: '',
  });

  if (error) errors.commonLikeError = error.value?.data.message;

  const auth = useAuth();
  const storeLike = useFruitLikeStore();

  if (data) {
    const likesFromDB = data.value as IFruitLikeStore;
    storeLike.addToLikesFromDB(likesFromDB);
  }

  const likes = computed(() => storeLike.getLikes);

  const saveLike = async (likeInfo: IFruitLike) => {
    const response: IFruitLike = await $fetch('/api/likes/fruits', {
      method: 'post',
      body: JSON.stringify(likeInfo),
    });

    storeLike.addToLikes({ fruitId: response.fruitId, isLiked: response.isLiked });
  };
  const handleLike = (postId: number) => {
    if (auth.value.isAuthenticated && postId) {
      _like.fruitId = postId;
      _like.isLiked = likes.value.fruitLikes[postId];
      _like.isLiked = likes.value.fruitLikes[postId] ? false : true;

      saveLike(_like);
    } else {
      errors.postId = postId;
      errors.postLikeError = UNAUTHORIZED;
    }
  };

  return {
    likes: likes.value.fruitLikes,
    handleLike,
    errors,
  };
};
