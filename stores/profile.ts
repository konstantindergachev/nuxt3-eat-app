import { defineStore } from 'pinia';
import { TUpdateProfile } from '@/interfaces/profile';

export const useStoreProfile = defineStore('profile', {
  state: () => {
    return {
      fullname: '',
      email: '',
      location: '',
    };
  },
  getters: {
    getProfile(state) {
      return { ...state };
    },
  },
  actions: {
    addToProfile(profile: TUpdateProfile) {
      this.fullname = profile.fullname;
      this.email = profile.email;
      this.location = profile.location;
    },
  },
});
