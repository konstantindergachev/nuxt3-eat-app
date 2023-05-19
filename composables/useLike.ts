export const useLike = () => {
  const likedPost = reactive({
    isLiked: false,
    postId: 0,
  });
  const message = ref('');

  const auth = useAuth();

  const addLike = async (postId: number) => {
    await $fetch('/api/likes', {
      method: 'post',
      body: postId.toString(),
    });
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
