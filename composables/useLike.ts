export const useLike = () => {
  const isLiked = ref(false);
  const message = ref('');

  const auth = useAuth();

  const handleLike = async (postId: string) => {
    if (auth.value.isAuthenticated) {
      isLiked.value = !isLiked.value;
      await $fetch('/api/likes', {
        method: 'post',
        body: postId,
      });
    } else {
      message.value = 'You need to be authorized.';
    }
  };

  return {
    isLiked,
    handleLike,
    message,
  };
};
