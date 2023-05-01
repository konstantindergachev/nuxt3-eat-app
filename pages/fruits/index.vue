<template>
  <div>
    <Head>
      <Title>EatApp - Fruits</Title>
    </Head>
    <h1 class="text-center mt-20 uppercase">Fruits</h1>
    <div v-if="data" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      <UICard v-for="product in data" :key="product.id">
        <div class="grid grid-cols-1">
          <UIImage :imgSrc="product.img" :imgName="product.name" className="h-80" />
          <UIText>{{ product.name }}</UIText>
          <UIButton
            className="btn btn-shape justify-self-center self-end"
            :path="`/fruits/${product.id}`"
            >{{ 'details' }}</UIButton
          >
        </div>
      </UICard>
    </div>
    <section v-else class="flex justify-center items-center mt-10"><UILoader /></section>
  </div>
</template>
<script setup lang="ts">
import { IFruit } from '@/interfaces/fruits';

const { data } = await useFetch<IFruit[]>('/api/fruits', { lazy: true });
</script>
