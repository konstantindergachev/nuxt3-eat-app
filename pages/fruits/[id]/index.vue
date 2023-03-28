<template>
  <div>
    <Head>
      <Title>EatApp - Fruit</Title>
    </Head>

    <h1 class="text-center mt-20 uppercase">Fruit</h1>
    <UICard v-if="fruit">
      <UIImage :imgSrc="fruit.img" :imgName="fruit.name" className="flex justify-center" />
      <UITitle>{{ fruit.name }}</UITitle>
      <UIText>{{ fruit.description }}</UIText>
      <div class="flex items-center justify-evenly mb-10">
        <p>
          Price:
          <span class="opacity-70">{{ moneyFormat('en-US', 'USD', fruit.price!) }}</span>
        </p>
        <div v-if="auth.isAuthenticated">
          <button type="button" v-if="fruit.popular" class="text-2xl">
            <span class="text-red-500">&#128153;</span>
          </button>
          <UIButton type="button" v-else class="text-2xl" :onClick="addToFavorite">
            <span class="opacity-70">&#9825;</span>
          </UIButton>
        </div>
      </div>
      <UIButton type="button" class="btn btn-shape justify-self-center" :onClick="addToBasket">{{
        'add to basket'
      }}</UIButton>
    </UICard>
  </div>
</template>

<script setup lang="ts">
import { IFruit } from '@/interfaces/fruits';
import { useUtilities } from '@/composables/useUtilities';
import { useStoreBasket } from '@/stores/basket';

const { moneyFormat } = useUtilities();
const route = useRoute();

const { data } = await useFetch<IFruit>(() => `/api/fruit?fruitId=${route.params.id}`);
let fruit: IFruit = reactive({ ...data.value });

const auth = useAuth();

const storeBasket = useStoreBasket();
const addToBasket = () => {
  const productToBasket = { ...data.value, count: 1 };
  if (data.value) storeBasket.addToBasket(productToBasket);
};

const addToFavorite = async () => {
  fruit.popular = true;
  const response: IFruit = await $fetch('/api/fruit', {
    method: 'put',
    body: { ...data.value, popular: !data.value?.popular },
  });
  fruit = response;
};
</script>
