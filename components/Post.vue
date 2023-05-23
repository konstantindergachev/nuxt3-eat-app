<template>
  <p class="text-red-500 capitalize" v-if="responseError">{{ responseError }}</p>
  <ul :class="[page ? 'block mt-0' : 'flex flex-wrap gap-4 mt-10']">
    <UICard v-for="post in posts" :key="post.id" :class="[page && 'mb-4']">
      <h3 class="uppercase text-Green font-bold leading-14 text-3xl">
        {{ post.title }}
      </h3>
      <p class="text-Black opacity-70 my-6">{{ post.text }}</p>
      <h4 class="uppercase text-xs my-3">{{ post.fullname }}</h4>
      <h4 class="uppercase text-xs">{{ post.created_at.split('.')[0] }}</h4>
      <UIWhiteStar v-if="!likes[post.id]" @click="() => handleLike(post.id)" class="m-auto"
        >&#9734;</UIWhiteStar
      >
      <UIBlackStar v-else @click="() => handleLike(posts.id)" class="m-auto">&#9733;</UIBlackStar>
      <p class="text-red-500 capitalize" v-if="message.postId === post.id">{{ message.text }}</p>
    </UICard>
  </ul>
</template>

<script setup lang="ts">
import { IPiniaLikeInfo, ILikeResponseErrorFromDB } from '@/interfaces/like';

const { page, posts } = defineProps(['page', 'posts']);
const { handleLike, message, likes: storedLikes } = useLike();
const { data, error } = await useFetch<IPiniaLikeInfo | ILikeResponseErrorFromDB>('/api/likes');
const responseError = ref('');
if (error) responseError.value = error.value?.data.message;
let likes = reactive<IPiniaLikeInfo>({});
likes = { ...storedLikes };
if (data) likes = { ...data.value } as IPiniaLikeInfo;
</script>
