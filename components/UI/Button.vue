<template>
  <NuxtLink v-if="!onClick" :to="path" :class="className"><slot /></NuxtLink>
  <button v-else :class="className" @click="onClick">
    <slot />
  </button>
</template>
<script setup lang="ts">
const { className, path, onClick } = defineProps(['className', 'path', 'onClick']);
</script>
