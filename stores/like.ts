import { defineStore } from 'pinia';

const likes: number[] = [];
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
    addToLikes(likeId: number) {
      this.likes.push(likeId);
    },
  },
});
