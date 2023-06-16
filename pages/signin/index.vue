<template>
  <section class="mx-auto">
    <h1 class="text-center my-10 uppercase">Sign in</h1>
    <UIPopUp v-if="!!errors.request" :message="errors.request" error="error" />
    <AppForm
      :onSubmit="handleSubmit"
      :inputs="inputs"
      :validate="validate"
      className="grid md:w-96 mb-10"
    />
    <span class="text-center"
      >If you don't have an account, than
      <NuxtLink to="/signup" class="text-Green capitalize"> sign up </NuxtLink></span
    >
  </section>
</template>
<script setup lang="ts">
import { useSignin } from '~~/composables/useSignin';

const { handleSubmit, inputs, validate, errors } = useSignin();
</script>
