<template>
  <header class="flex flex-col md:flex-row items-center justify-between">
    <NuxtLink to="/">
      <img src="/images/logo.png" alt="logo" />
    </NuxtLink>
    <Navbar />
    <div class="relative">
      <div v-if="auth.isAuthenticated" class="flex items-center">
        <NuxtLink to="/basket" class="z-10"
          ><img src="/images/carrybag.svg" alt="Carry bag" class="w-12" />
          <span class="absolute top-[1.20rem] left-[19px] text-red-500">{{ fruitsCount }}</span>
        </NuxtLink>
        <UIButton type="button" class="btn btn-shape" :onClick="logout">{{ 'log out' }}</UIButton>
      </div>
      <UIButton
        v-if="!auth.isAuthenticated && route.path !== '/signup' && route.path !== '/signin'"
        className="btn btn-shape"
        path="/signup"
        >{{ 'sign up' }}</UIButton
      >
    </div>
  </header>
</template>
<script setup>
import { useStoreBasket } from '@/stores/basket';

const route = useRoute();
const router = useRouter();
const auth = useAuth();

const storeBasket = useStoreBasket();
const fruitsCount = computed(() => {
  return storeBasket.getBasketFruitsCount;
});

const logout = () => {
  auth.value.isAuthenticated = false;
  router.push('/');
};
</script>
