<template>
  <div :class="className"><img :src="imgSrc" :alt="imgName" /></div>
</template>
<script setup lang="ts">
const { imgSrc, imgName, className } = defineProps(['imgSrc', 'imgName', 'className']);
</script>
