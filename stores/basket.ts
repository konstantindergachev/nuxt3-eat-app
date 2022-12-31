import { defineStore } from 'pinia';
import { basket } from '@/stub/basket';
import { IBasket } from '@/interfaces/fruits';

export const useStoreBasket = defineStore('basket', {
  state: () => {
    return { basket };
  },
  getters: {
    getBasketFruitsCount(state) {
      const totalFruitsCount = state.basket.reduce((acc, cur) => {
        return acc + cur.count;
      }, 0);
      return totalFruitsCount;
    },
    getBasketFruits(state) {
      return state.basket;
    },
  },
  actions: {
    addToBasket(product: IBasket) {
      this.basket.push(product);
    },
    deleteFromBasket(productId: string) {
      this.basket = this.basket.filter((product) => product.id !== productId);
    },
  },
});
