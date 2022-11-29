<template>
  <div>
    <Head><Title>EatApp - Nuxtjs</Title></Head>
    <h1 class="text-center mt-10 mb-10 uppercase">Sign up</h1>
    <form @submit.prevent="handleSignup" class="grid max-w-xl mx-auto">
      <UIInput
        type="text"
        name="fullname"
        placeholder="Enter your full name"
        class="shadow-lg border rounded-lg p-2 mb-2"
        @update:modelValue="getFullname"
        :modelValue="form.fullname"
      />
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
      <UIInput
        type="password"
        name="password_confirm"
        placeholder="Enter your password to confirm"
        class="shadow-lg border rounded-lg p-2 mb-2"
        @update:modelValue="getPasswordConfirm"
        :modelValue="form.passwordConfirm"
      />
      <UIButton
        type="submit"
        className="bg-Green text-White capitalize hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-md px-3 py-1 justify-self-center h-10 lg:ml-4"
        >{{ 'send' }}</UIButton
      >
      <span class="text-center mt-10"
        >If you have an account, than
        <NuxtLink to="/signin" class="text-Green capitalize"> sign in </NuxtLink></span
      >
    </form>
  </div>
</template>
<script setup lang="ts">
import { ISignup } from '@/interfaces/signup';

const form = reactive<ISignup>({
  fullname: '',
  email: '',
  password: '',
  passwordConfirm: '',
});

const getFullname = (value: string) => {
  form.fullname = value;
};
const getEmail = (value: string) => {
  form.email = value;
};
const getPassword = (value: string) => {
  form.password = value;
};
const getPasswordConfirm = (value: string) => {
  form.passwordConfirm = value;
};

const handleSignup = async () => {
  await $fetch('/api/auth/signup', {
    method: 'post',
    body: form,
  });
  form.fullname = '';
  form.email = '';
  form.password = '';
  form.passwordConfirm = '';
};
</script>
