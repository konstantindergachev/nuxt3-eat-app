import { defineStore } from 'pinia';
import { basket } from '~~/stub/basket';
import { IBasket } from '~~/interfaces/fruits';

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
    loadFromLocalStorage() {
      const cachedBasket = localStorage.getItem('basket');
      if (cachedBasket) {
        this.basket = JSON.parse(cachedBasket);
        return;
      }
      this.basket = [];
    },
    addToBasket(product: IBasket) {
      this.basket.push(product);
      localStorage.setItem('basket', JSON.stringify(this.basket));
    },
    deleteFromBasket(productId: number) {
      this.basket = this.basket.filter((product) => product.id !== productId);
      localStorage.setItem('basket', JSON.stringify(this.basket));
    },
    addFruitCount(productId: number) {
      this.basket = this.basket.filter((product) => {
        if (product.id == productId) {
          product.count += 1;
        }
        return product;
      });
      localStorage.setItem('basket', JSON.stringify(this.basket));
    },
    removeFruitCount(productId: number) {
      this.basket = this.basket.filter((product) => {
        if (product.id == productId) {
          product.count -= 1;
        }
        return product;
      });
      localStorage.setItem('basket', JSON.stringify(this.basket));
    },
  },
});
