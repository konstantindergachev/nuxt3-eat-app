import { usePostLikeStore } from '~~/stores/like';
import { IPostLike, IPostLikeStore, IPostLikeResponseError } from '~~/interfaces/postlike';

export const usePostLike = async () => {
  const { data, error } = await useFetch<IPostLikeStore | IPostLikeResponseError>(
    '/api/likes/posts'
  );

  const storeLike = usePostLikeStore();

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

  if (data.value?.error) {
    errors.commonLikeError = data.value.error as string; //error is here
  }

  //@ts-ignore
  const likes: IPostLikeStore = data.value ? data.value : {};

  const saveLike = async (likeInfo: IPostLike) => {
    const response: IPostLike = await $fetch('/api/likes/posts', {
      method: 'post',
      body: JSON.stringify(likeInfo),
    });
    const { postId, isLiked } = response;
    likes[postId] = isLiked;
    storeLike.addToLikesFromDB(likes);
  };
  const handleLike = (postId: number) => {
    if (Object.keys(storeLike.$state.postLikes).length !== 0) {
      _like.postId = postId;
      _like.isLiked = !storeLike.$state.postLikes[postId];
      saveLike(_like);
    } else {
      _like.postId = postId;
      //@ts-ignore
      _like.isLiked = data.value ? !data.value[postId] : true;
      saveLike(_like);
    }
  };

  return {
    likes,
    handleLike,
    errors,
  };
};
