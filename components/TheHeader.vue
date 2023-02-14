<template>
  <header class="flex flex-col md:flex-row items-center justify-between">
    <NuxtLink to="/">
      <img src="/images/logo.png" alt="logo" />
    </NuxtLink>
    <Navbar />
    <div class="relative">
      <div v-if="auth.isAuthenticated">
        <NuxtLink to="/basket" class="z-10"
          ><img src="/images/carrybag.svg" alt="Carry bag" class="w-12" />
          <span class="absolute top-[1.20rem] left-[19px] text-red-500">{{ fruitsCount }}</span>
        </NuxtLink>
      </div>
      <UIButton
        v-if="!auth.isAuthenticated && route.path !== '/signup' && route.path !== '/signin'"
        className="bg-Green text-White hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-tr-large rounded-bl-large px-3 py-1"
        path="/signup"
        >{{ 'sign up' }}</UIButton
      >
    </div>
  </header>
</template>
<script setup>
import { useStoreBasket } from '@/stores/basket';

const route = useRoute();
const auth = useAuth();

const storeBasket = useStoreBasket();
const fruitsCount = computed(() => {
  return storeBasket.getBasketFruitsCount;
});
</script>
