<template>
  <div>
    <Head><Title>EatApp - About us</Title></Head>
    <section
      class="container flex flex-col-reverse justify-center items-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
    >
      <div class="w-full lg:w-6/12">
        <img src="/images/about_us.png" alt="About us" class="mt-5 lg:mt-0" />
      </div>
      <div class="w-full lg:w-6/12 space-y-8 pt-14 md:pt-32">
        <h1 class="uppercase text-Green text-6xl font-bold leading-14">{{ about?.title }}</h1>
        <p class="text-Black opacity-70">{{ about?.description }}</p>
        <div class="w-full">
          <ul v-for="item in about?.list" :key="item.id" class="flex flex-wrap">
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
  </div>
</template>
<script setup lang="ts">
import { IAbout } from '@/interfaces/about';

const { data } = await useFetch<IAbout>('/api/about');
const about = data.value;

// const url = 'https://reqres.in/api/users/2';
// onMounted(async () => {
//   const { data, error } = await useFetch(url);
//   if (data.value) {
//     console.log('data', data.value.data); //FIXME: remove me
//   } else {
//     console.log('error', error.value); //FIXME: remove me
//   }
// });
</script>
