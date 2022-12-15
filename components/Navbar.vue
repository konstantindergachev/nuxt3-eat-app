<template>
  <nav class="text-Black flex justify-between space-x-10 capitalize">
    <NuxtLink
      v-for="nav in navigation"
      :key="nav.id"
      :to="nav.path"
      activeClass="border-b-2 border-b-Green"
      class="border-transparent border-b-2 hover:border-b-Green"
      >{{ nav.title }}</NuxtLink
    >
  </nav>
</template>
<script setup lang="ts">
import { INavigation } from '@/interfaces/navigation';

const navigation: INavigation[] = [
  {
    id: '1',
    path: '/fruits',
    title: 'fruits',
  },
  {
    id: '2',
    path: '/review',
    title: 'review',
  },
  {
    id: '3',
    path: '/about',
    title: 'about',
  },
  {
    id: '4',
    path: '/location',
    title: 'location',
  },
];
</script>
