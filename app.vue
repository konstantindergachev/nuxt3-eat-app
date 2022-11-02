<template>
  <NuxtLayout>
    <NuxtPage :key="$route.fullPath" />
    <a href="#" @click="view('home')">Home</a>
    <a href="#" @click="view('counter')">Counter</a>
    <LazyHomeWelcome v-if="page === 'home'" />
    <LazyCounter v-if="page === 'counter'" />
  </NuxtLayout>
</template>

<script setup>
// const MyComponent = shallowRef(resolveComponent('Counter'));
const page = ref('home');

const view = (name) => {
  page.value = name;
};
</script>
