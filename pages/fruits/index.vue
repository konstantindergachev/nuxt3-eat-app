<template>
  <div>
    <Head>
      <Title>EatApp - Fruits</Title>
    </Head>
    <h1 class="text-center mt-20 uppercase">Fruits</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      <div
        v-for="prod in products"
        :key="prod.id"
        class="shadow-lg border rounded-lg text-center p-10"
      >
        <div class="grid grid-cols-1">
          <div>
            <img :src="prod.img" :alt="prod.name" class="h-80" />
          </div>

          <p class="opacity-70 mb-10">{{ prod.name }}</p>
          <UIButton
            className="bg-Green text-White capitalize hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-tr-large rounded-bl-large px-3 py-1 justify-self-center h-10"
            :path="`/fruits/${prod.id}`"
            >{{ 'details' }}</UIButton
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { IFruits } from '../../interfaces/fruits';

const { data } = await useFetch<IFruits>('http://localhost:3000/api/fruits');
const products = data.value?.fruits;
</script>
