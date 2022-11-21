<template>
  <NuxtLink v-if="!onClick" :to="path" :class="className"><slot /></NuxtLink>
  <button v-else :class="className" @click="onClick">
    <slot />
  </button>
</template>
<script setup lang="ts">
import { IButton } from '../../interfaces/button';

const { className, path, onClick }: IButton = defineProps(['className', 'path', 'onClick']);
</script>
