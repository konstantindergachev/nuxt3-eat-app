import { useStoreLike } from '@/stores/like';
import { ILikeInfo } from '@/interfaces/like';

export const useLike = () => {
  const likeInfo = reactive({
    isLiked: false,
    postId: 0,
  });
  const message = reactive({
    postId: 0,
    text: '',
  });

  const auth = useAuth();
  const storeLike = useStoreLike();

  const { likes } = storeLike.getLikes;

  const saveLike = async (likeInfo: ILikeInfo) => {
    const response = await $fetch('/api/likes', {
      method: 'post',
      body: JSON.stringify(likeInfo),
    });
    storeLike.addToLikes({ postId: response.postId, isLiked: response.isLiked });
  };
  const handleLike = (postId: number) => {
    if (auth.value.isAuthenticated && postId) {
      likeInfo.isLiked = likeInfo.postId === postId ? false : true;
      likeInfo.postId = postId;

      saveLike(likeInfo);
    } else {
      message.postId = postId;
      message.text = 'You need to be an authorized.';
    }
  };

  return {
    likes,
    handleLike,
    message,
  };
};
