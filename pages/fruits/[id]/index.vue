<template>
  <div>
    <Head>
      <Title>EatApp - Fruit</Title>
    </Head>

    <h1 class="text-center mt-20 uppercase">Fruit</h1>
    <UICard v-if="data">
      <UIImage :imgSrc="data.img" :imgName="data.name" className="flex justify-center" />
      <UITitle>{{ data.name }}</UITitle>
      <UIText>{{ data.description }}</UIText>
      <p class="mb-10">
        Price:
        <span class="opacity-70">{{ moneyFormat('en-US', 'USD', data.price!) }}</span>
      </p>
      <UIButton
        type="button"
        className="bg-Green text-White capitalize hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-tr-large rounded-bl-large px-3 py-1 justify-self-center h-10"
        :onClick="addToBasket"
        >{{ 'add to basket' }}</UIButton
      >
    </UICard>
  </div>
</template>

<script setup lang="ts">
import { IFruit } from '@/interfaces/fruits';
import { moneyFormat } from '@/utils';
import { useStoreBasket } from '@/stores/basket';

const route = useRoute();

const { data } = await useFetch<IFruit>(() => `/api/fruit?fruitId=${route.params.id}`);

const storeBasket = useStoreBasket();
const addToBasket = () => {
  const productToBasket = { ...data.value, count: 1 };
  if (data.value) storeBasket.addToBasket(productToBasket);
};
</script>
