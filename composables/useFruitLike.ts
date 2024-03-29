import { useFruitLikeStore } from '~~/stores/like';
import { IFruitLike, IFruitLikeStore, IFruitLikeResponseError } from '~~/interfaces/fruitlike';

export const useFruitLike = async () => {
  const { data, error } = await useFetch<IFruitLikeStore | IFruitLikeResponseError>(
    '/api/likes/fruits'
  );

  const storeLike = useFruitLikeStore();

  const _like = reactive<IFruitLike>({
    isLiked: false,
    fruitId: 0,
  });
  const errors = reactive({
    fruitId: 0,
    fruitLikeError: '',
    commonLikeError: '',
  });

  if (error) errors.commonLikeError = error.value?.data.message;

  // @ts-ignore
  const likes: IFruitLikeStore = data.value ? data.value : {};

  const saveLike = async (likeInfo: IFruitLike) => {
    const response: IFruitLike = await $fetch('/api/likes/fruits', {
      method: 'post',
      body: JSON.stringify(likeInfo),
    });

    const { fruitId, isLiked } = response;
    likes[fruitId] = isLiked;
    storeLike.addToLikesFromDB(likes);
  };
  let handleLike = (fruitId: number) => {
    if (Object.keys(storeLike.$state.fruitLikes).length !== 0) {
      _like.fruitId = fruitId;
      _like.isLiked = !storeLike.$state.fruitLikes[fruitId];
      saveLike(_like);
    } else {
      _like.fruitId = fruitId;
      // @ts-ignore
      _like.isLiked = data.value ? !data.value[fruitId] : true;
      saveLike(_like);
    }
  };

  return {
    likes,
    handleLike,
    errors,
  };
};
