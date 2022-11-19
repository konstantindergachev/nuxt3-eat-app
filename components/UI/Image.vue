<template>
  <div><img :src="imgSrc" :alt="imgName" /></div>
</template>
<script setup>
const { imgSrc, imgName } = defineProps(['imgSrc', 'imgName']);
</script>
