<template>
  <div class="space-x-10 absolute bottom-0 right-0">
    <UIButton
      type="button"
      className="bg-White text-Green hover:bg-Green hover:text-White text-2xl shadow-md rounded-full px-3 cursor-pointer"
      @click="$emit('prev')"
      >{{ '&#8249;' }}</UIButton
    >
    <UIButton
      type="button"
      className="bg-White text-Green hover:bg-Green hover:text-White text-2xl shadow-md rounded-full px-3 cursor-pointer"
      @click="$emit('next')"
      >{{ '&#8250;' }}</UIButton
    >
  </div>
</template>
<script setup>
const emits = defineEmits(['prev', 'next']);
</script>
