<template>
  <h1 class="text-center mt-10 mb-10 uppercase">Sign in</h1>
  <form @submit.prevent="handleSignup" class="grid max-w-xl mx-auto">
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
    <UIButton
      type="submit"
      className="bg-Green text-White capitalize hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-md px-3 py-1 justify-self-center lg:ml-4"
      >{{ 'send' }}</UIButton
    >
    <span class="text-center mt-10"
      >If you don't have an account, than
      <NuxtLink to="/signup" class="text-Green capitalize"> sign up </NuxtLink></span
    >
  </form>
</template>
<script setup lang="ts">
import { ISignin, ISigninErrors } from '@/interfaces/signin';
import { useStoreAuth } from '@/stores/auth';
import { signinSchema } from '@/validation/signin.validation';

const form = reactive<ISignin>({
  email: '',
  password: '',
});

const errors = reactive<ISigninErrors>({
  email: '',
  password: '',
  request: '',
});

const getEmail = (value: string) => {
  form.email = value;
};
const getPassword = (value: string) => {
  form.password = value;
};

const storeAuth = useStoreAuth();
const router = useRouter();

const validate = async (field: keyof ISigninErrors) => {
  try {
    await signinSchema.validateAt(field, form);
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
  await $fetch('/api/auth/signin', {
    method: 'post',
    body: form,
  });

  storeAuth.authenticate();
  const auth = useAuth();
  auth.value.isAuthenticated = true;
  if (auth.value.isAuthenticated) {
    router.push('/profile');
  }

  form.email = '';
  form.password = '';
};
</script>
