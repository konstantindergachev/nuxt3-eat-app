<template>
  <section
    class="container flex flex-col justify-around items-center md:flex-row md:space-x-10 mt-14 md:mt-32 mb-12 shadow-lg rounded-lg p-4"
  >
    <img src="/images/product10.png" alt="Product 10" />
    <div class="space-y-8 pb-10">
      <h1 class="text-Black text-3xl font-bold leading-14 text-center md:text-left capitalize">
        {{ title }}
      </h1>
      <p class="max-w-xl text-Black opacity-70 text-center md:text-left">
        {{ description }}
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
          <UIButton type="submit" class="btn rounded-md justify-self-center lg:ml-4">{{
            'send'
          }}</UIButton>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { INewsletter, INewsletterForm } from '@/interfaces/newsletter';

const { title, description }: INewsletter = defineProps(['title', 'description']);
const form = reactive<INewsletterForm>({
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
