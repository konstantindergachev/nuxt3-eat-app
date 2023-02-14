<template>
  <nav class="text-Black flex justify-between space-x-10 capitalize">
    <NuxtLink
      v-for="item in nav"
      :key="item.id"
      :to="item.path"
      activeClass="border-b-2 border-b-Green"
      class="border-transparent border-b-2 hover:border-b-Green"
      >{{ item.title }}</NuxtLink
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
    title: 'about us',
  },
  {
    id: '4',
    path: '/location',
    title: 'location',
  },
];

const auth = useAuth();
const nav = !auth.value.isAuthenticated
  ? navigation
  : [...navigation, { id: '5', path: '/profile', title: 'profile' }];
</script>
