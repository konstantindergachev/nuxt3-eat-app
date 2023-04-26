<template>
  <div class="mx-auto">
    <h1 class="text-center my-10 uppercase">Sign in</h1>
    <p class="text-Green capitalize" v-if="!!errors.request">
      {{ errors.request }}
    </p>
    <TheForm
      :onSubmit="handleSubmit"
      :inputs="inputs"
      :validate="validate"
      className="grid max-w-xl mb-10"
    />
    <span class="text-center"
      >If you don't have an account, than
      <NuxtLink to="/signup" class="text-Green capitalize"> sign up </NuxtLink></span
    >
  </div>
</template>
<script setup lang="ts">
import { useSignin } from '@/composables/useSignin';

const { handleSubmit, inputs, validate, errors } = useSignin();
</script>
