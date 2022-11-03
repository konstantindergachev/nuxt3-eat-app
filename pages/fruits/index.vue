<template>
  <div>
    <Head>
      <Title>EatApp - Fruits</Title>
    </Head>
    <h1 class="text-center mt-20 uppercase">Fruits</h1>
    <div class="grid grid-cols-4 gap-4 mt-10">
      <div v-for="prod in products" :key="prod.id" class="shadow-lg border rounded-lg text-center">
        <div class="grid grid-cols-1">
          <div class="flex justify-center items-center">
            <img :src="prod.img" :alt="prod.name" class="h-80" />
          </div>

          <p>{{ prod.name }}</p>
          <NuxtLink
            :to="'/fruits/' + prod.id"
            class="px-2 bg-green-500 text-white rounded-md justify-self-center"
            >Details</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const products = useProducts();
</script>
