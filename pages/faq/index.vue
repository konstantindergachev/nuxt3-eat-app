<template>
  <div>
    <Head><Title>EatApp - FAQ</Title></Head>
    <section
      class="container flex flex-col-reverse justify-center items-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
    >
      <h1 class="uppercase text-Green text-6xl font-bold leading-14 self-start mt-4">
        {{ 'Frequently Asked Questions' }}
      </h1>

      <div class="w-full">
        <ul v-for="item in data" :key="item.id" class="flex flex-col">
          <li class="flex justify-between items-center mb-10 space-x-24 md:space-x-4">
            <div class="text-Black opacity-70">
              <div class="flex items-center">
                <h3 class="uppercase text-2xl leading-14 my-4">{{ item.question }}</h3>
                <span
                  class="ml-5 cursor-pointer text-2xl"
                  @click="() => closeAnswer(item.id)"
                  v-if="openedAnswers.includes(item.id)"
                  >-</span
                >
                <span class="ml-5 cursor-pointer" @click="() => openAnswer(item.id)" v-else>+</span>
              </div>
              <ul
                :class="openedAnswers.includes(item.id) ? 'block indent-10 text-justify' : 'hidden'"
                v-if="openedAnswers.includes(item.id)"
                v-for="(answer, index) in item.answers"
                :key="index"
              >
                <li>{{ answer }}</li>
              </ul>
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
const openedAnswers = reactive<number[]>([]);

const openAnswer = (itemId: number): void => {
  data.value?.forEach((question) => {
    if (question.id === itemId) {
      return openedAnswers.push(question.id);
    }
  });
};
const closeAnswer = (itemId: number): number[] => {
  const index = openedAnswers.indexOf(itemId);
  openedAnswers.splice(index, 1);
  return openedAnswers;
};
</script>
