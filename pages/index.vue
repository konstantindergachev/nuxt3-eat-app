<template>
  <TheBanner />
  <Recommendation />
  <Delivery />
  <TheTop :topThreeProducts="topThreeProducts" />
  <Newsletter />
</template>
<script setup lang="ts">
import { IFruit } from '@/interfaces/fruits';

const { data } = await useLazyFetch<IFruit[]>('/api/fruits');
const topThreeProducts = data.value?.filter((product, idx) => idx <= 2 && product);
</script>
