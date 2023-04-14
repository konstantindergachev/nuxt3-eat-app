<template>
  <ul class="flex flex-col md:flex-row flex-wrap gap-4 mt-10" :class="[page && 'mt-0']">
    <UICard v-for="post in posts" :key="post.id">
      <h3 class="uppercase text-Green font-bold leading-14 text-3xl">
        {{ post.title }}
      </h3>
      <p class="text-Black opacity-70 my-6">{{ post.text }}</p>
      <h4 class="uppercase text-xs my-3">{{ post.fullname }}</h4>
      <h4 class="uppercase text-xs">{{ post.created_at.split('.')[0] }}</h4>
    </UICard>
  </ul>
</template>

>
<script setup lang="ts">
const { page, posts } = defineProps(['page', 'posts']);
</script>
