import { useStoreLike } from '@/stores/like';

export const useLike = () => {
  const likedPost = reactive({
    isLiked: false,
    postId: 0,
  });
  const message = ref('');

  const auth = useAuth();

  const storeLike = useStoreLike();

  const addLike = async (postId: number) => {
    const response = await $fetch('/api/likes', {
      method: 'post',
      body: postId.toString(),
    });
    const likedPost = { postId: response.postId, likeId: response.likeId };
    storeLike.addToLikes(likedPost);
  };
  const handleLike = (postId: number) => {
    if (auth.value.isAuthenticated) {
      likedPost.isLiked = !likedPost.isLiked;
      likedPost.postId = postId;
      if (likedPost.isLiked) {
        addLike(postId);
      }
    } else {
      message.value = 'You need to be authorized.';
    }
  };

  return {
    likedPost,
    handleLike,
    message,
  };
};
