import { defineStore } from 'pinia';
import { IFruit } from '~~/interfaces/fruits';

export const useStoreFruit = defineStore('fruit', {
  state: () => {
    const fruits: IFruit[] = [];
    return { fruits };
  },
  getters: {
    getFruits(state) {
      return state.fruits;
    },
  },
  actions: {
    addFruits(fruits: IFruit[]) {
      this.fruits = fruits;
    },
  },
});
