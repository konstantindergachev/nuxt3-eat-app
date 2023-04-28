<template>
  <div class="mx-auto">
    <Head><Title>EatApp - Nuxtjs</Title></Head>
    <h1 class="text-center mt-10 mb-10 uppercase">Sign up</h1>
    <p class="text-Green capitalize" v-if="!!errors.request">
      {{ errors.request }}
    </p>
    <TheForm
      :onSubmit="handleSubmit"
      :inputs="inputs"
      :validate="validate"
      className="grid md:w-96 mb-10"
    />

    <span class="text-center mt-10"
      >If you have an account, than
      <NuxtLink to="/signin" class="text-Green capitalize"> sign in </NuxtLink></span
    >
  </div>
</template>
<script setup lang="ts">
import { useSignup } from '@/composables/useSignup';

const { handleSubmit, inputs, validate, errors } = useSignup();
</script>
