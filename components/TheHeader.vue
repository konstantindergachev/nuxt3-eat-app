<template>
  <header class="flex flex-col md:flex-row items-center justify-between">
    <NuxtLink to="/">
      <img
        src="https://res.cloudinary.com/dmqomp5ba/image/upload/v1683010240/logo/logo_llkbzu.png"
        alt="logo"
      />
    </NuxtLink>
    <ThePrivateNavbar v-if="auth.isAuthenticated" />
    <TheNavbar v-else />
    <div class="relative mt-5 lg:mt-0">
      <div v-if="auth.isAuthenticated" class="flex items-center">
        <NuxtLink to="/basket" class="z-10"
          ><img
            src="https://res.cloudinary.com/dmqomp5ba/image/upload/v1683010132/basket/carrybag_kydmqi.svg"
            alt="Carry bag"
            class="w-12"
          />
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
import { useStoreBasket } from '~~/stores/basket';

const route = useRoute();
const router = useRouter();
const auth = useAuth();

const storeBasket = useStoreBasket();

onMounted(() => {
  storeBasket.loadFromLocalStorage();
});

const fruitsCount = computed(() => {
  return storeBasket.getBasketFruitsCount;
});

const logout = async () => {
  auth.value.isAuthenticated = false;
  $fetch('/api/auth/logout', { method: 'delete' });
  router.push('/signin');
};
</script>
