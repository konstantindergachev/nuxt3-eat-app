<template>
  <div class="relative w-full">
    <Head>
      <Title>EatApp - review</Title>
    </Head>
    <Carousel :slides="slides" :interval="3000" controls indicators />
  </div>
</template>
<script setup lang="ts">
import { ISlides } from '@/interfaces/review';

const { data } = await useFetch<ISlides>('/api/review');
const slides = data.value?.slides;
</script>
