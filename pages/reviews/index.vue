<template>
  <section class="relative w-full mb-5">
    <Head>
      <Title>EatApp - review</Title>
    </Head>
    <AppCarousel :slides="data?.reviews" :interval="3000" controls indicators />
  </section>
  <UIButton
    v-if="auth.isAuthenticated"
    type="button"
    class="btn self-start my-10"
    :onClick="() => view('post')"
    >{{ 'create post' }}</UIButton
  >
  <section>
    <LazyAppPostForm v-if="page === 'post'" />
    <AppPost :page="page" :posts="storedPosts" />
  </section>
</template>
<script setup lang="ts">
import { ISlide, IPost } from '~~/interfaces/review';
import { useStorePost } from '~~/stores/post';

const { data } = await useFetch<{ reviews: ISlide[]; posts: IPost[] }>('/api/reviews');

const auth = useAuth();

const storePost = useStorePost();
const storedPosts = computed(() => storePost.getPosts);
const posts = data.value?.posts;
if (posts) storePost.addPosts(posts);

const page = ref('');
const view = (name: string) => (page.value = name);
</script>
