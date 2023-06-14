<template>
  <Head><Title>EatApp - Privacy Policy</Title></Head>
  <section
    v-if="data"
    class="container flex flex-col-reverse justify-center items-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
  >
    <div class="w-full">
      <h1
        class="text-center uppercase text-Green font-bold leading-14 mb-10 text-3xl lg:text-6xl lg:mb-20"
      >
        {{ 'Individual Marketplace Privacy Policy' }}
      </h1>
      <ul v-for="item in data" :key="item.id" class="flex flex-col">
        <li class="flex justify-between items-center mb-10 space-x-24 md:space-x-4">
          <div class="text-Black opacity-70">
            <h3 class="text-left uppercase text-2xl leading-14 my-4">{{ item.title }}:</h3>
            <p
              v-for="(description, index) in item.paragraph"
              :key="index"
              class="text-justify indent-10"
            >
              {{ description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section v-else class="flex justify-center items-center mt-10"><UILoader /></section>
</template>
<script setup lang="ts">
import { IPrivacy } from '~~/interfaces/privacy';

const { data } = await useFetch<IPrivacy[]>('/api/privacy', { lazy: true });
</script>
