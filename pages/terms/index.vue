<template>
  <div>
    <Head><Title>EatApp - Terms of Service</Title></Head>
    <section
      class="container flex justify-center items-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
    >
      <div class="w-full">
        <h1 class="text-center uppercase text-Green text-6xl font-bold leading-14 mb-10">
          {{ 'Terms of Service' }}
        </h1>
        <h3 class="text-center text-2xl font-bold leading-14 mb-20">
          Welcome to the EatApp! We operate a marketplace which allows you to buy or sell wine using
          our website. Have a good time and please remember our house rules.
        </h3>

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
  </div>
</template>
<script setup lang="ts">
import { ITerms } from '@/interfaces/terms';

const { data } = await useFetch<ITerms[]>('/api/terms');
</script>
