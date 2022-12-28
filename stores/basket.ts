import { defineStore } from 'pinia';
import { basket } from '@/stub/basket';
import { IFruit } from '@/interfaces/fruits';

export const useStoreBasket = defineStore('basket', {
  state: () => {
    return { basket };
  },
  actions: {
    addToBasket(product: IFruit) {
      this.basket.push(product);
    },
  },
});
