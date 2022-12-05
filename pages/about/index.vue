<template>
  <div class="relative w-full">
    <Head>
      <Title>EatApp - About</Title>
    </Head>
    <Carousel :slides="slides" :interval="3000" controls indicators />
  </div>
</template>
<script setup lang="ts">
import { ISlides } from '@/interfaces/about';

const { data } = await useFetch<ISlides>('/api/about');
const slides = data.value?.slides;
</script>
