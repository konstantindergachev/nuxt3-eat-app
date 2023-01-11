<template>
  <header class="flex flex-col md:flex-row items-center justify-between space-y-4">
    <NuxtLink to="/">
      <img src="/images/logo.png" alt="logo" />
    </NuxtLink>
    <Navbar />
    <div class="flex items-center relative">
      <div v-if="storeAuth.getAuthentication">
        <NuxtLink to="/basket" class="z-10"
          ><img src="/images/carrybag.svg" alt="Carry bag" class="w-12"
        /></NuxtLink>
        <span class="absolute top-[1.20rem] left-[19px] text-red-500">{{ fruitsCount }}</span>
      </div>
      <UIButton
        v-if="route.path !== '/signup' && !storeAuth.getAuthentication"
        className="bg-Green text-White hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-tr-large rounded-bl-large px-3 py-1"
        path="/signup"
        >{{ 'sign up' }}</UIButton
      >
    </div>
  </header>
</template>
<script setup>
import { useStoreBasket } from '@/stores/basket';
import { useStoreAuth } from '@/stores/auth';

const route = useRoute();
const storeAuth = useStoreAuth();

const storeBasket = useStoreBasket();
const fruitsCount = computed(() => {
  return storeBasket.getBasketFruitsCount;
});
</script>
