<template>
  <div>
    <Head><Title>EatApp - Basket</Title></Head>
    <section class="container m-auto flex flex-col gap-4 lg:justify-between mt-14 md:mt-32">
      <div
        v-for="product in basket"
        :key="product.id"
        class="w-full flex justify-around items-center shadow-lg border rounded-lg text-center p-2"
      >
        <UIImage :imgSrc="product.img" imgName="product.name" className="flex justify-center" />
        <h2>{{ product.name }}</h2>
        <h3>{{ product.count }}</h3>
        <div class="flex">
          <UIButton
            type="button"
            class="uppercase text-Green text-3xl font-bold leading-6 shadow-md rounded-full w-6 text-center cursor-pointer"
            :onClick="() => decrease(product.id!, product.count)"
            >{{ '-' }}</UIButton
          >
          <div class="flex relative">
            <p class="mx-2">{{ moneyFormat('en-US', 'USD', product.price!) }}</p>
            <span
              v-if="product.count > 1"
              class="absolute left-12 -top-14 shadow-lg border rounded-lg text-center p-2 text-xs"
              >{{ moneyFormat('en-US', 'USD', product.price! * product.count) }} for
              {{ product.count }}</span
            >
          </div>
          <UIButton
            type="button"
            class="uppercase text-Green text-2xl font-bold leading-6 shadow-md rounded-full w-6 text-center cursor-pointer"
            :onClick="() => increase(product.id!)"
            >{{ '+' }}</UIButton
          >
          <UIButton
            type="button"
            className=" bg-red-500 text-White capitalize hover:bg-White hover:text-red-500 border-solid border-2 border-red-500 rounded-md px-3 lg:ml-4 cursor-pointer"
            :onClick="() => remove(product.id!)"
            >{{ '&#10005;' }}</UIButton
          >
        </div>
      </div>
      <div class="w-28 self-end shadow-lg border rounded-lg text-center py-2">
        Total:
        <p class="pl-2 text-2xl text-Green">{{ moneyFormat('en-US', 'USD', totalPrice) }}</p>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { useStoreBasket } from '@/stores/basket';
import { moneyFormat } from '@/utils';
const storeBasket = useStoreBasket();

const basket = computed(() => {
  return storeBasket.getBasketFruits;
});
const totalPrice = computed(() => {
  return storeBasket.getBasketFruitsTotalPrice;
});

const remove = (productId: string) => {
  storeBasket.deleteFromBasket(productId);
};

const increase = (productId: string) => {
  storeBasket.addFruitCount(productId);
};

const decrease = (productId: string, productCount: number) => {
  if (productCount === 1) {
    return remove(productId);
  }
  storeBasket.removeFruitCount(productId);
};
</script>
