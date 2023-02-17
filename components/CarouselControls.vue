<template>
  <div class="space-x-10 absolute bottom-0 right-0">
    <UIButton type="button" class="btn-carousel-nav" @click="$emit('prev')">{{
      '&#8249;'
    }}</UIButton>
    <UIButton type="button" class="btn-carousel-nav" @click="$emit('next')">{{
      '&#8250;'
    }}</UIButton>
  </div>
</template>
<script setup>
const emits = defineEmits(['prev', 'next']);
</script>
