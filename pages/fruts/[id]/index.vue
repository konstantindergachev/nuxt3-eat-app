<template>
  <div>
    <Head>
      <Title>EatApp - Product</Title>
    </Head>

    <h1 class="text-center mt-20 uppercase">Product</h1>
    <div class="flex justify-center w-full mt-20">
      <div class="shadow-lg border rounded-lg text-center">
        <div><img :src="product.img" :alt="product.name" /></div>

        <h1 class="text-3xl">{{ product.name }}</h1>
        <button class="px-2 bg-green-500 text-white rounded-md" @click="addToCart">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = useProducts();
const route = useRoute();

const product = products.value.find((product) => {
  if (product.id === route.params.id) {
    return product;
  }
});

const cart = useCart();
const addToCart = () => {
  cart.value.push({
    product,
  });
};
</script>
