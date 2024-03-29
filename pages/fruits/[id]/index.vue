<template>
  <section>
    <Head>
      <Title>EatApp - Fruit</Title>
    </Head>

    <h1 class="text-center mt-20 uppercase">Fruit</h1>
    <UICard v-if="fruit">
      <UIPopUp v-if="errors.commonLikeError" :message="errors.commonLikeError" error="error" />
      <UIImage :imgSrc="fruit.img" :imgName="fruit.name" className="flex justify-center mt-5" />
      <UITitle>{{ fruit.name }}</UITitle>
      <UIText>{{ fruit.description }}</UIText>
      <div class="flex items-center justify-evenly mb-10">
        <p>
          Price:
          <span class="opacity-70">{{ moneyFormat('en-US', 'USD', fruit.price!) }}</span>
        </p>
        <div v-if="auth.isAuthenticated">
          <UIWhiteStar v-if="!likes[fruit.id!]" @click="() => handleLike(fruit.id!)"
            >&#9734;</UIWhiteStar
          >
          <UIBlackStar v-else @click="() => handleLike(fruit.id!)">&#9733;</UIBlackStar>
        </div>
      </div>
      <UIButton type="button" class="btn btn-shape justify-self-center" :onClick="addToBasket">{{
        'add to basket'
      }}</UIButton>
    </UICard>
  </section>
</template>

<script setup lang="ts">
import { IFruit } from '~~/interfaces/fruits';
import { useUtilities } from '~~/composables/useUtilities';
import { useStoreBasket } from '~~/stores/basket';

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

const { likes, handleLike, errors } = await useFruitLike();
</script>
