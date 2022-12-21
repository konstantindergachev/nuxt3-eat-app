<template>
  <TheBanner
    :title="banner?.title"
    :subtitle="banner?.subtitle"
    :description="banner?.description"
  />
  <Recommendation />
  <Delivery />
  <TheTop :topThreeProducts="topThreeProducts" />
  <Newsletter />
</template>
<script setup lang="ts">
import { IBanner } from '@/interfaces/thebanner';
import { IFruit } from '@/interfaces/fruits';

const { data: banner } = await useLazyFetch<IBanner>('/api/banner');

const { data } = await useLazyFetch<IFruit[]>('/api/fruits');
const topThreeProducts = data.value?.filter((product, idx) => idx <= 2 && product);
</script>
