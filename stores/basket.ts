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
    getBasketFruitsTotalPrice(state) {
      const totalFruitsPrice = state.basket.reduce((acc, cur) => {
        return acc + cur.count * cur.price!;
      }, 0);
      return totalFruitsPrice;
    },
  },
  actions: {
    addToBasket(product: IBasket) {
      this.basket.push(product);
    },
    deleteFromBasket(productId: number) {
      this.basket = this.basket.filter((product) => product.id !== productId);
    },
    addFruitCount(productId: number) {
      this.basket = this.basket.filter((product) => {
        if (product.id == productId) {
          product.count += 1;
        }
        return product;
      });
    },
    removeFruitCount(productId: number) {
      this.basket = this.basket.filter((product) => {
        if (product.id == productId) {
          product.count -= 1;
        }
        return product;
      });
    },
  },
});
