import { defineStore } from 'pinia';
import { IPostLikeStore, IPostLike } from '~~/interfaces/postlike';
import { IFruitLikeStore, IFruitLike } from '~~/interfaces/fruitlike';

const postLikes: IPostLikeStore = {};
export const usePostLikeStore = defineStore('postLike', {
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

const fruitLikes: IFruitLikeStore = {};
export const useFruitLikeStore = defineStore('fruitLike', {
  state: () => {
    return {
      fruitLikes,
    };
  },
  getters: {
    getLikes(state) {
      return { ...state };
    },
  },
  actions: {
    addToLikes(likedFruit: IFruitLike) {
      this.fruitLikes[likedFruit.fruitId] = likedFruit.isLiked;
    },
    addToLikesFromDB(likedFruit: IFruitLikeStore) {
      this.fruitLikes = { ...likedFruit };
    },
  },
});
