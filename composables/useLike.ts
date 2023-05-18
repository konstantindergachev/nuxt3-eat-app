export const useLike = () => {
  const isLiked = ref(false);
  const message = ref('');

  const auth = useAuth();

  const handleLike = () => {
    if (auth.value.isAuthenticated) {
      isLiked.value = !isLiked.value;
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
