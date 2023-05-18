<template>
  <ul :class="[page ? 'block mt-0' : 'flex flex-wrap gap-4 mt-10']">
    <UICard v-for="post in posts" :key="post.id" :class="[page && 'mb-4']">
      <h3 class="uppercase text-Green font-bold leading-14 text-3xl">
        {{ post.title }}
      </h3>
      <p class="text-Black opacity-70 my-6">{{ post.text }}</p>
      <h4 class="uppercase text-xs my-3">{{ post.fullname }}</h4>
      <h4 class="uppercase text-xs">{{ post.created_at.split('.')[0] }}</h4>
      <UIWhiteStar v-if="!isLiked" @click="handleLike" class="m-auto">&#9734;</UIWhiteStar>
      <UIBlackStar v-else @click="handleLike" class="m-auto">&#9733;</UIBlackStar>
    </UICard>
  </ul>
</template>

>
<script setup lang="ts">
const { page, posts } = defineProps(['page', 'posts']);
const { isLiked, handleLike } = useLike();
watch(isLiked, () => isLiked.value);
</script>
