import { defineStore } from 'pinia';
import { IPiniaLikeInfo, ILikeInfo } from '@/interfaces/like';

const likes: IPiniaLikeInfo = {};
export const useStoreLike = defineStore('like', {
  state: () => {
    return {
      likes,
    };
  },
  getters: {
    getLikes(state) {
      return { ...state };
    },
  },
  actions: {
    addToLikes(likedPost: ILikeInfo) {
      this.likes[likedPost.postId] = likedPost.isLiked;
    },
    addToLikesFromDB(likedPost: IPiniaLikeInfo) {
      this.likes = { ...likedPost };
    },
  },
});
