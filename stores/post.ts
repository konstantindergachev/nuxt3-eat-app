import { defineStore } from 'pinia';
import { IReview, IPost } from '@/interfaces/review';

export const useStorePost = defineStore('post', {
  state: () => {
    const posts: IPost[] = [];
    return { posts };
  },
  getters: {
    getPost(state) {
      return { ...state };
    },
    getPosts(state) {
      return state.posts;
    },
  },
  actions: {
    addPost(post: IReview) {
      this.posts.push({ ...post, id: Date.now(), created_at: new Date().toISOString().toString() });
    },
    addPosts(posts: IPost[]) {
      this.posts = posts;
    },
  },
});
