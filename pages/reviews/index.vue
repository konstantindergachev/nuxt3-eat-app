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
  <ul class="flex flex-row justify-start flex-wrap mt-10 space-x-8">
    <li v-for="post in posts" :key="post.id" class="space-y-4">
      <h3 class="uppercase text-Green font-bold leading-14 text-3xl lg:text-3xl">
        {{ post.title }}
      </h3>
      <p class="text-Black opacity-70">{{ post.text }}</p>
      <h4 class="uppercase text-xs">{{ post.fullname }}</h4>
      <h4 class="uppercase text-xs">{{ post.created_at.split('.')[0] }}</h4>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { ISlide, IPost } from '@/interfaces/review';

const { data } = await useFetch<{ reviews: ISlide[]; posts: IPost[] }>('/api/reviews');
const slides = data.value?.reviews;
const posts = data.value?.posts;
const auth = useAuth();

const page = ref('');
const view = (name: string) => (page.value = name);
</script>
