<template>
  <section class="container flex flex-col lg:flex-row justify-between lg:space-x-10 mt-14 md:mt-32">
    <div class="w-full lg:w-6/12">
      <img :src="img.url" :alt="img.title" />
    </div>
    <div class="w-full lg:w-6/12 space-y-8 pt-14 md:pt-32">
      <div class="flex lg:space-x-4">
        <h1 class="text-Black text-3xl font-bold leading-14 text-center md:text-left">
          {{ title }}
        </h1>
        <img :src="titleImg.url" :alt="titleImg.title" class="hidden md:block" />
      </div>
      <p class="lg:max-w-xl text-Black opacity-70 text-center md:text-left">
        {{ description }}
      </p>
      <div class="w-full">
        <ul class="flex flex-wrap justify-between">
          <li
            v-for="character in characteristic"
            :key="character.id"
            class="flex items-center mb-10 space-x-24 md:space-x-4"
          >
            <span
              class="uppercase text-Green text-3xl font-bold leading-14 shadow-md rounded-full py-1 w-11 text-center"
              >{{ character.id }}</span
            >
            <div>
              <h3 class="uppercase text-Green text-6xl font-bold leading-14">
                {{ character.value }}
              </h3>
              <p class="capitalize">{{ character.name }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { IRecommendation } from '@/interfaces/recommendation';

const { title, titleImg, description, img, characteristic }: IRecommendation = defineProps([
  'title',
  'titleImg',
  'description',
  'img',
  'characteristic',
]);
</script>
