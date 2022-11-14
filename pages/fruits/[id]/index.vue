<template>
  <div>
    <Head>
      <Title>EatApp - Fruit</Title>
    </Head>

    <h1 class="text-center mt-20 uppercase">Fruit</h1>
    <div class="flex justify-center w-full mt-20">
      <div class="shadow-lg border rounded-lg text-center p-10">
        <div class="flex justify-center"><img :src="product.img" :alt="product.name" /></div>

        <h1 class="text-3xl capitalize mb-4">{{ product.name }}</h1>
        <p class="opacity-70 mb-10">{{ product.description }}</p>
        <p class="mb-10">
          Price: <span class="opacity-70">$ {{ product.price }}</span>
        </p>
        <button
          class="bg-Green text-White hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-tr-large rounded-bl-large px-3 py-1 justify-self-center h-10"
          @click="addToCart"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const { data, refresh } = await useFetch(() => `/api/fruit?fruitId=${route.params.id}`);

if (route.params.id !== data.value.fruit.id) {
  refresh();
}
const product = computed(() => data.value.fruit);

const cart = useCart();
const addToCart = () => {
  cart.value.push({
    product,
  });
};
</script>
