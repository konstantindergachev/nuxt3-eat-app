<template>
  <NuxtLink v-if="!type" :to="path" :class="className"><slot /></NuxtLink>
  <button v-else :class="className" @click="onClick" :type="type">
    <slot />
  </button>
</template>
<script setup lang="ts">
import { IButton } from '@/interfaces/button';

const { type, className, path, onClick }: IButton = defineProps([
  'type',
  'className',
  'path',
  'onClick',
]);
</script>
