<template>
  <button @click="increment">Increment</button>
  <p>{{ count }}</p>
  <button @click="decrement">Decrement</button>
</template>

<script setup>
const count = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
</script>
