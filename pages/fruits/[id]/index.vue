<template>
  <div>
    <Head>
      <Title>EatApp - Fruit</Title>
    </Head>

    <h1 class="text-center mt-20 uppercase">Fruit</h1>
    <UICard>
      <UIImage :imgSrc="product?.img" :imgName="product?.name" className="flex justify-center" />
      <UITitle>{{ product?.name }}</UITitle>
      <UIText>{{ product?.description }}</UIText>
      <p class="mb-10">
        Price: <span class="opacity-70">$ {{ product?.price }}</span>
      </p>
      <UIButton
        className="bg-Green text-White capitalize hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-tr-large rounded-bl-large px-3 py-1 justify-self-center h-10"
        :onClick="addToCart"
        >{{ 'buy now' }}</UIButton
      >
    </UICard>
  </div>
</template>

<script setup lang="ts">
import { IFruit } from '../../../interfaces/fruits';
const route = useRoute();

const { data, refresh } = await useFetch<IFruit>(() => `/api/fruit?fruitId=${route.params.id}`);

if (data.value?.fruit && route.params.id !== data.value.fruit.id) {
  refresh();
}
const product = computed(() => data.value?.fruit && data.value.fruit);

const cart = useCart();
const addToCart = () => {
  cart.value.push();
};
</script>
