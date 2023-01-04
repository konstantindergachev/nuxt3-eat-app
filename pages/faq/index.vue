<template>
  <div>
    <Head><Title>EatApp - FAQ</Title></Head>
    <section
      class="container flex flex-col-reverse justify-center items-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
    >
      <h1 class="uppercase text-Green text-6xl font-bold leading-14">
        {{ 'Frequently Asked Questions' }}
      </h1>

      <div class="w-full">
        <ul v-for="item in data" :key="item.id" class="flex flex-col">
          <li class="flex justify-between items-center mb-10 space-x-24 md:space-x-4">
            <div class="text-Black opacity-70">
              <h3 class="uppercase text-2xl leading-14">{{ item.question }}</h3>
              <p>{{ item.answer }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { IFAQ } from '@/interfaces/faq';

const { data } = await useFetch<IFAQ[]>('/api/faq');
</script>
