<template>
  <NuxtLink v-if="!onClick" :to="path" :class="className"><slot /></NuxtLink>
  <button v-else :class="className" @click="onClick">
    <slot />
  </button>
</template>
<script setup>
const { className, onClick, path } = defineProps(['className', 'onClick', 'path']);
</script>
