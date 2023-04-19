<template>
  <h1 class="text-center mt-10 mb-10 uppercase">Sign in</h1>
  <form @submit.prevent="handleSignup" class="grid max-w-xl mx-auto">
    <p
      class="text-red-500 capitalize"
      v-if="!!errors.email || !!errors.password || !!errors.request"
    >
      {{ errors.email || errors.password || errors.request }}
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
      >If you don't have an account, than
      <NuxtLink to="/signup" class="text-Green capitalize"> sign up </NuxtLink></span
    >
  </form>
</template>
<script setup lang="ts">
import { ISigninErrors } from '@/interfaces/signin';
import { useStoreProfile } from '@/stores/profile';
import { signinSchema } from '@/validation/signin.validation';
import { useFormConfigs } from '@/composables/useSigninFormConfig';

const { inputs, form } = useFormConfigs();

const errors = reactive<ISigninErrors>({
  email: '',
  password: '',
  request: '',
});

const storeProfile = useStoreProfile();
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
  try {
    const { id, firstname, lastname, email } = await $fetch('/api/auth/signin', {
      method: 'post',
      body: form,
    });

    const auth = useAuth();
    auth.value.isAuthenticated = Boolean(id);

    if (auth.value.isAuthenticated) {
      const profile = { fullname: `${firstname} ${lastname}`, email, location: '' };
      storeProfile.addToProfile(profile);
      router.push('/profile');
    }

    form.email = '';
    form.password = '';
  } catch (error) {
    if (error instanceof Error) {
      errors.request = `Sorry! You don't have any account yet.`;
    }
  }
};
</script>
