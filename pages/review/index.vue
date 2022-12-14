<template>
  <div class="relative w-full">
    <Head>
      <Title>EatApp - review</Title>
    </Head>
    <Carousel v-if="slides" :slides="slides" :interval="3000" controls indicators />
  </div>
</template>
<script setup lang="ts">
import { ISlide } from '@/interfaces/review';

const { data } = await useFetch<ISlide[]>('/api/review');
const slides = data.value;
</script>
