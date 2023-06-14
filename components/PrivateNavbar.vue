<template>
  <nav class="text-Black flex flex-wrap justify-between space-x-10 capitalize mt-5 lg:mt-0">
    <NuxtLink
      v-for="item in navigation"
      :key="item.id"
      :to="item.path"
      activeClass="active"
      class="btn-nav"
      >{{ item.title }}</NuxtLink
    >
  </nav>
</template>
<script setup lang="ts">
import { INavigation } from '~~/interfaces/navigation';

const navigation: INavigation[] = [
  { id: '1', path: '/fruits', title: 'fruits' },
  { id: '2', path: '/reviews', title: 'reviews' },
  { id: '3', path: '/about', title: 'about us' },
  { id: '4', path: '/location', title: 'location' },
  { id: '5', path: '/profile', title: 'profile' },
];
</script>
