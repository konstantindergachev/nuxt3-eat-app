import { defineStore } from 'pinia';

export const useStoreAuth = defineStore('auth', {
  state: () => {
    return { isAuth: false };
  },
  getters: {
    getAuthentication(state) {
      return state.isAuth;
    },
  },
  actions: {
    authenticate() {
      this.isAuth = true;
    },
  },
});
