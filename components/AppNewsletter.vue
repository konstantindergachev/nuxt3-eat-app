<template>
  <section
    class="container flex flex-col justify-around items-center md:flex-row md:space-x-10 mt-14 md:mt-32 mb-12 shadow-lg rounded-lg p-4"
  >
    <img
      src="https://res.cloudinary.com/dmqomp5ba/image/upload/v1683009840/fruits/product10_zoty7t.png"
      alt="Product 10"
    />
    <div class="space-y-8 pb-10">
      <h1 class="text-Black text-3xl font-bold leading-14 text-center md:text-left capitalize">
        {{ title }}
      </h1>
      <p class="max-w-xl text-Black opacity-70 text-center md:text-left">
        {{ description }}
      </p>
      <UIPopUp v-if="message || errors.request" :message="message" :error="errors.request" />
      <div class="w-full">
        <AppForm :onSubmit="handleSubmit" :inputs="inputs" :validate="validate" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { INewsletter } from '~~/interfaces/newsletter';
import { useNewsletter } from '~~/composables/useNewsletter';

const { title, description }: INewsletter = defineProps(['title', 'description']);

const { handleSubmit, inputs, message, validate, errors, timeoutId } = useNewsletter();

onUnmounted(() => {
  clearTimeout(timeoutId.value);
});
</script>
