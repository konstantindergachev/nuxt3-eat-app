<template>
  <TheBanner />
  <Recommendation />
  <Delivery />
  <TheTop :topThreeProducts="topThreeProducts" />
  <section
    class="container flex flex-col md:flex-row justify-around items-center md:space-x-10 mt-14 md:mt-32 mb-12 shadow-lg rounded-lg p-4"
  >
    <img src="/images/product10.png" alt="Product 10" />
    <div class="space-y-8 pb-10">
      <h1 class="text-Black text-3xl font-bold leading-14 text-center md:text-left">
        Subscribe Newsletter
      </h1>
      <p class="max-w-xl text-Black opacity-70 text-center md:text-left">
        Vegetables are available in many varieties and can be classified into biological groups or
        ‘families’, including:
      </p>
      <div class="w-full">
        <form @submit.prevent="handleNewsletter">
          <UIInput
            type="email"
            name="user_email"
            placeholder="Enter your mail"
            class="shadow-lg border rounded-lg p-2"
            @update:modelValue="getEmail"
            :modelValue="form.email"
          />
          <UIButton
            type="submit"
            className="bg-Green text-White capitalize hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-md px-3 py-1 justify-self-center h-10 lg:ml-4"
            >{{ 'send' }}</UIButton
          >
        </form>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { IFruit } from '@/interfaces/fruits';
import { INewsletter } from '@/interfaces/nesletter';

const { data } = await useLazyFetch<IFruit[]>('/api/fruits');
const topThreeProducts = data.value?.filter((product, idx) => idx <= 2 && product);

const form = reactive<INewsletter>({
  email: '',
});

const getEmail = (value: string) => {
  form.email = value;
};

const handleNewsletter = async () => {
  await $fetch('/api/newsletter', { method: 'post', body: { email: form.email } });
  form.email = '';
};
</script>
