<template>
  <div><img :src="imgSrc" :alt="imgName" :class="className" /></div>
</template>
<script setup>
const { imgSrc, imgName, className } = defineProps(['imgSrc', 'imgName', 'className']);
</script>
