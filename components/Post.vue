<template>
  <ul class="flex flex-wrap justify-between" :class="[page === 'post' ? 'lg:w-1/3' : 'lg:w-full']">
    <li v-for="post in posts" :key="post.id" class="space-y-4 mb-8">
      <h3 class="uppercase text-Green font-bold leading-14 text-3xl lg:text-3xl">
        {{ post.title }}
      </h3>
      <p class="text-Black opacity-70">{{ post.text }}</p>
      <h4 class="uppercase text-xs">{{ post.fullname }}</h4>
      <h4 class="uppercase text-xs">{{ post.created_at.split('.')[0] }}</h4>
    </li>
  </ul>
</template>

>
<script setup lang="ts">
const { page, posts } = defineProps(['page', 'posts']);
</script>
