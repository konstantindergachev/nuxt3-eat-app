<template>
  <h1 class="text-center mt-10 mb-10 uppercase">Sign in</h1>
  <form @submit.prevent="handleSignup" class="grid max-w-xl mx-auto">
    <UIInput
      type="email"
      name="email"
      placeholder="Enter your mail"
      class="shadow-lg border rounded-lg p-2 mb-2"
      @update:modelValue="getEmail"
      :modelValue="form.email"
    />
    <UIInput
      type="password"
      name="password"
      placeholder="Enter your password"
      class="shadow-lg border rounded-lg p-2 mb-2"
      @update:modelValue="getPassword"
      :modelValue="form.password"
    />
    <UIButton
      type="submit"
      className="bg-Green text-White capitalize hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-md px-3 py-1 justify-self-center h-10 lg:ml-4"
      >{{ 'send' }}</UIButton
    >
    <span class="text-center mt-10"
      >If you don't have an account, than
      <NuxtLink to="/signup" class="text-Green capitalize"> sign up </NuxtLink></span
    >
  </form>
</template>
<script setup lang="ts">
import { ISignin } from '../../interfaces/signin';

const form = reactive<ISignin>({
  email: '',
  password: '',
});

const getEmail = (value: string) => {
  form.email = value;
};
const getPassword = (value: string) => {
  form.password = value;
};

const handleSignup = async () => {
  await $fetch('/api/auth/signin', {
    method: 'post',
    body: form,
  });

  form.email = '';
  form.password = '';
};
</script>
