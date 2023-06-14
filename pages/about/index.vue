<template>
  <Head><Title>EatApp - About us</Title></Head>
  <section
    v-if="data"
    class="container flex flex-col-reverse justify-center items-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
  >
    <div class="w-full lg:w-6/12">
      <img
        src="https://res.cloudinary.com/dmqomp5ba/image/upload/v1683010416/about/about_us_uekqk5.png"
        alt="About us"
        class="mt-5 lg:mt-0"
      />
    </div>
    <div class="w-full lg:w-6/12 space-y-8 md:pt-32">
      <h1
        class="uppercase text-Green font-bold leading-14 text-3xl lg:text-6xl text-center lg:text-left"
      >
        {{ data.title }}
      </h1>
      <p class="text-Black opacity-70">{{ data.description }}</p>
      <div class="w-full">
        <ul v-for="item in data.list" :key="item.id" class="flex flex-wrap">
          <li class="flex justify-between items-center mb-10 space-x-24 md:space-x-4">
            <img :src="item.url" :alt="item.name" class="w-10 text-center" />

            <div class="text-Black opacity-70">
              <h3 class="uppercase text-2xl leading-14">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </li>
        </ul>
        <UIButton className="btn btn-shape" path="/fruits">{{ 'shop now' }}</UIButton>
      </div>
    </div>
  </section>
  <section v-else class="flex justify-center items-center mt-10"><UILoader /></section>
</template>
<script setup lang="ts">
import { IAbout } from '~~/interfaces/about';

const { data } = await useFetch<IAbout>('/api/about', { lazy: true });
</script>
