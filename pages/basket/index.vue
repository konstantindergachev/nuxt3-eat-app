<template>
  <div>
    <Head><Title>EatApp - Basket</Title></Head>
    <section class="container flex flex-col lg:justify-between mt-14 md:mt-32 m-auto gap-4">
      <div
        v-for="product in basket"
        :key="product.id"
        class="w-full flex flex-col md:flex-row justify-around items-center shadow-lg border rounded-lg text-center p-6 lg:p-2"
      >
        <UIImage :imgSrc="product.img" imgName="product.name" className="flex justify-center" />
        <h2>{{ product.name }}</h2>
        <h3>{{ product.count }}</h3>
        <div class="flex space-x-8">
          <UIButton
            type="button"
            class="btn-round"
            :onClick="() => decrease(product.id!, product.count)"
            >{{ '-' }}</UIButton
          >
          <div class="flex relative">
            <p class="mx-2">{{ moneyFormat('en-US', 'USD', product.price!) }}</p>
            <span
              v-if="product.count > 1"
              class="absolute -left-16 -top-10 lg:left-12 lg:-top-14 shadow-lg border rounded-lg text-center p-2 text-xs"
              >{{ moneyFormat('en-US', 'USD', product.price! * product.count) }} for
              {{ product.count }}</span
            >
          </div>
          <UIButton type="button" class="btn-round" :onClick="() => increase(product.id!)">{{
            '+'
          }}</UIButton>
          <UIButton type="button" class="btn-del" :onClick="() => remove(product.id!)">{{
            '&#10005;'
          }}</UIButton>
        </div>
      </div>
      <div v-if="totalPrice > 0" class="w-28 self-end shadow-lg border rounded-lg text-center py-2">
        Total:
        <p class="pl-2 text-2xl text-Green">{{ moneyFormat('en-US', 'USD', totalPrice) }}</p>
      </div>
      <UIButton v-if="totalPrice > 0" path="/checkout" className="btn btn-shape self-end">{{
        'checkout'
      }}</UIButton>
      <div
        v-if="!basket.length"
        class="w-52 m-auto shadow-lg border rounded-lg text-red-500 text-center py-2"
      >
        Your basket is empty
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { useStoreBasket } from '@/stores/basket';
import { useUtilities } from '@/composables/useUtilities';

definePageMeta({
  middleware: ['auth'],
});

const { moneyFormat } = useUtilities();
const storeBasket = useStoreBasket();

const basket = computed(() => {
  return storeBasket.getBasketFruits;
});
const totalPrice = computed(() => {
  return storeBasket.getBasketFruitsTotalPrice;
});

const remove = (productId: number) => {
  storeBasket.deleteFromBasket(productId);
};

const increase = (productId: number) => {
  storeBasket.addFruitCount(productId);
};

const decrease = (productId: number, productCount: number) => {
  if (productCount === 1) {
    return remove(productId);
  }
  storeBasket.removeFruitCount(productId);
};
</script>
