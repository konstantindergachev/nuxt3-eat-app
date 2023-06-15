<template>
  <section
    class="container flex flex-col-reverse justify-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
  >
    <div class="w-full text-center lg:w-6/12 space-y-8 pt-14 md:pt-32">
      <h4 class="uppercase text-xs">{{ subtitle }}</h4>
      <h1 class="uppercase text-Green text-6xl font-bold leading-14">
        {{ title }}
      </h1>
      <p class="text-Black opacity-70">
        {{ description }}
      </p>
      <div class="space-x-10">
        <UIButton className="btn btn-shape" path="/about">{{ 'learn more' }}</UIButton>
      </div>
    </div>
    <div class="w-full lg:w-6/12">
      <img :src="img.url" :alt="img.title" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { IBanner } from '~~/interfaces/thebanner';
const { title, subtitle, description, img }: IBanner = defineProps([
  'title',
  'subtitle',
  'description',
  'img',
]);
</script>
