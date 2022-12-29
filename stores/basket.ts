import { defineStore } from 'pinia';
import { basket } from '@/stub/basket';
import { IFruit } from '@/interfaces/fruits';

export const useStoreBasket = defineStore('basket', {
  state: () => {
    return { basket };
  },
  getters: {
    getBasket(state) {
      return state.basket;
    },
  },
  actions: {
    addToBasket(product: IFruit) {
      this.basket.push(product);
    },
    deleteFromBasket(productId: string) {
      this.basket = this.basket.filter((product) => product.id !== productId);
    },
  },
});
