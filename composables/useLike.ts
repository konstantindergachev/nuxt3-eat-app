export const useLike = () => {
  const isLiked = ref(false);

  const handleLike = () => {
    isLiked.value = !isLiked.value;
  };

  return {
    isLiked,
    handleLike,
  };
};
