<template>
  <div class="relative w-full mb-5">
    <Head>
      <Title>EatApp - review</Title>
    </Head>
    <Carousel v-if="slides" :slides="slides" :interval="3000" controls indicators />
  </div>
  <UIButton
    v-if="auth.isAuthenticated"
    type="button"
    class="btn self-start mb-5"
    :onClick="() => view('post')"
    >{{ 'create post' }}</UIButton
  >
  <LazyPost v-if="page === 'post'" />
</template>
<script setup lang="ts">
import { ISlide } from '@/interfaces/review';

const { data } = await useFetch<ISlide[]>('/api/review');
const slides = data.value;
const auth = useAuth();

const page = ref('');
const view = (name: string) => (page.value = name);
</script>
