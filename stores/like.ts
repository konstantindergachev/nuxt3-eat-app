import { defineStore } from 'pinia';
import { ILikedPost } from '@/interfaces/like';

const likes: ILikedPost[] = [];
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
    addToLikes(likedPost: ILikedPost) {
      this.likes.push(likedPost);
    },
  },
});
