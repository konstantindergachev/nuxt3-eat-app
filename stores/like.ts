import { defineStore } from 'pinia';
import { IPostLikeStore, IPostLike } from '@/interfaces/postlike';

const postLikes: IPostLikeStore = {};
export const usePostLikeStore = defineStore('like', {
  state: () => {
    return {
      postLikes,
    };
  },
  getters: {
    getLikes(state) {
      return { ...state };
    },
  },
  actions: {
    addToLikes(likedPost: IPostLike) {
      this.postLikes[likedPost.postId] = likedPost.isLiked;
    },
    addToLikesFromDB(likedPost: IPostLikeStore) {
      this.postLikes = { ...likedPost };
    },
  },
});
