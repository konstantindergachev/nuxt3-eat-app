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
    class="btn self-start my-10"
    :onClick="() => view('post')"
    >{{ 'create post' }}</UIButton
  >
  <div class="flex flex-col md:flex-row md:justify-between">
    <LazyPostForm v-if="page === 'post'" />
    <Post :page="page" :posts="storedPosts" />
  </div>
</template>
<script setup lang="ts">
import { ISlide, IPost } from '@/interfaces/review';
import { useStorePost } from '@/stores/post';

const { data } = await useFetch<{ reviews: ISlide[]; posts: IPost[] }>('/api/reviews');
const slides = data.value?.reviews;

const auth = useAuth();

const storePost = useStorePost();
const storedPosts = computed(() => storePost.getPosts);
const posts = data.value?.posts;
if (posts) storePost.addPosts(posts);

const page = ref('');
const view = (name: string) => (page.value = name);
</script>
