<template>
  <div class="absolute left-1/2 -translate-x-1/2 bottom-6 z-10">
    <UIButton
      type="button"
      class="btn-carousel-dot"
      :class="{ active: currentIndex === index }"
      v-for="(, index) in total"
      :key="index"
      @click="$emit('switch', index)"
    ></UIButton>
  </div>
</template>
<script setup>
const { total, currentIndex } = defineProps(['total', 'currentIndex']);
const emits = defineEmits(['switch']);
</script>
<style scoped>
.active {
  opacity: 1;
}
</style>
