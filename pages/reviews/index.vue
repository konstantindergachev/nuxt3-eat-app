<template>
  <div class="relative w-full">
    <Head>
      <Title>EatApp - review</Title>
    </Head>
    <Carousel v-if="slides" :slides="slides" :interval="3000" controls indicators />
  </div>
  <a href="#" @click="view('counter')">Counter</a>
  <LazyCounter v-if="page === 'counter'" />
</template>
<script setup lang="ts">
import { ISlide } from '@/interfaces/review';

const { data } = await useFetch<ISlide[]>('/api/review');
const slides = data.value;

const page = ref('');
const view = (name: string) => (page.value = name);
</script>
