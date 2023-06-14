<template>
  <div :class="className"><img :src="imgSrc" :alt="imgName" /></div>
</template>
<script setup lang="ts">
import { IImage } from '~~/interfaces/image';

const { imgSrc, imgName, className }: IImage = defineProps(['imgSrc', 'imgName', 'className']);
</script>
