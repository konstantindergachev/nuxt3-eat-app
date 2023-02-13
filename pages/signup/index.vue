<template>
  <div>
    <Head><Title>EatApp - Nuxtjs</Title></Head>
    <h1 class="text-center mt-10 mb-10 uppercase">Sign up</h1>
    <form @submit.prevent="handleSignup" class="grid max-w-xl mx-auto">
      <p class="text-red-500 capitalize" v-if="!!errors.fullname">
        {{ errors.fullname }}
      </p>
      <UIInput
        type="text"
        name="fullname"
        placeholder="Enter your full name"
        class="shadow-lg border rounded-lg p-2 mb-2"
        @update:modelValue="getFullname"
        :modelValue="form.fullname"
        :onValidate="validate"
      />
      <p class="text-red-500 capitalize" v-if="!!errors.email">
        {{ errors.email }}
      </p>
      <UIInput
        type="email"
        name="email"
        placeholder="Enter your mail"
        class="shadow-lg border rounded-lg p-2 mb-2"
        @update:modelValue="getEmail"
        :modelValue="form.email"
        :onValidate="validate"
      />
      <p class="text-red-500 capitalize" v-if="!!errors.password">
        {{ errors.password }}
      </p>
      <UIInput
        type="password"
        name="password"
        placeholder="Enter your password"
        class="shadow-lg border rounded-lg p-2 mb-2"
        @update:modelValue="getPassword"
        :modelValue="form.password"
        :onValidate="validate"
      />
      <p class="text-red-500 capitalize" v-if="!!errors.passwordConfirm">
        {{ errors.passwordConfirm }}
      </p>
      <UIInput
        type="password"
        name="passwordConfirm"
        placeholder="Enter your password to confirm"
        class="shadow-lg border rounded-lg p-2 mb-2"
        @update:modelValue="getPasswordConfirm"
        :modelValue="form.passwordConfirm"
        :onValidate="validate"
      />
      <UIButton
        type="submit"
        className="bg-Green text-White capitalize hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-md px-3 py-1 justify-self-center lg:ml-4"
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
import { ISignup, ISignupErrors } from '@/interfaces/signup';
import { useStoreAuth } from '@/stores/auth';
import { signupSchema } from '@/validation/signup.validation';

const form = reactive<ISignup>({
  fullname: '',
  email: '',
  password: '',
  passwordConfirm: '',
});

const errors = reactive<ISignupErrors>({
  fullname: '',
  email: '',
  password: '',
  passwordConfirm: '',
  request: '',
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

const storeAuth = useStoreAuth();
const router = useRouter();

const validate = async (field: keyof ISignupErrors) => {
  try {
    await signupSchema.validateAt(field, form);
    errors[field] = '';
  } catch (error) {
    if (error instanceof Error) {
      errors[field] = error.message;
    } else {
      errors[field] = 'Unexpected error';
    }
  }
};

const handleSignup = async () => {
  await $fetch('/api/auth/signup', {
    method: 'post',
    body: form,
  });

  storeAuth.authenticate();
  router.push('/profile');

  form.fullname = '';
  form.email = '';
  form.password = '';
  form.passwordConfirm = '';
};
</script>
