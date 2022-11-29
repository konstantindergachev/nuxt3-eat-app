<template>
  <div>
    <Head>
      <Title>EatApp - Fruits</Title>
    </Head>
    <h1 class="text-center mt-20 uppercase">Fruits</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      <UICard v-for="prod in products" :key="prod.id">
        <div class="grid grid-cols-1">
          <UIImage :imgSrc="prod.img" :imgName="prod.name" className="h-80" />
          <UIText>{{ prod.name }}</UIText>
          <UIButton
            className="bg-Green text-White capitalize hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-tr-large rounded-bl-large px-3 py-1 justify-self-center h-10"
            :path="`/fruits/${prod.id}`"
            >{{ 'details' }}</UIButton
          >
        </div>
      </UICard>
    </div>
  </div>
</template>
<script setup lang="ts">
import { IFruits } from '@/interfaces/fruits';

const { data } = await useFetch<IFruits>('/api/fruits');
const products = data.value?.fruits;
</script>
