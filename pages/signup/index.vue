<template>
  <div>
    <Head><Title>EatApp - Nuxtjs</Title></Head>
    <h1 class="text-center mt-10 mb-10 uppercase">Sign up</h1>
    <form @submit.prevent="handleSignup" class="grid max-w-xl mx-auto">
      <p
        class="text-red-500 capitalize"
        v-if="
          !!errors.fullname ||
          !!errors.email ||
          !!errors.password ||
          !!errors.passwordConfirm ||
          !!errors.request
        "
      >
        {{
          errors.fullname ||
          errors.email ||
          errors.password ||
          errors.passwordConfirm ||
          errors.request
        }}
      </p>
      <UIInput
        v-for="input in inputs"
        :key="input.name"
        :type="input.type"
        :name="input.name"
        :placeholder="input.placeholder"
        className="shadow-lg border rounded-lg p-2 mb-2"
        :modelValue="input.value"
        :onValidate="validate"
        @update:modelValue="input.getValue"
      />
      <UIButton type="submit" class="btn rounded-md justify-self-center lg:ml-4">{{
        'send'
      }}</UIButton>
      <span class="text-center mt-10"
        >If you have an account, than
        <NuxtLink to="/signin" class="text-Green capitalize"> sign in </NuxtLink></span
      >
    </form>
  </div>
</template>
<script setup lang="ts">
import { ISignupErrors } from '@/interfaces/signup';
import { signupSchema } from '@/validation/signup.validation';
import { useSignupFormConfigs } from '@/composables/useSignupFormConfig';

const { inputs, form } = useSignupFormConfigs();

const errors = reactive<ISignupErrors>({
  fullname: '',
  email: '',
  password: '',
  passwordConfirm: '',
  request: '',
});

const auth = useAuth();
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

  auth.value.isAuthenticated = true;
  router.push('/profile');

  form.fullname = '';
  form.email = '';
  form.password = '';
  form.passwordConfirm = '';
};
</script>
