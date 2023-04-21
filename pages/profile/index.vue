<template>
  <section class="container flex justify-center md:flex-row lg:justify-between lg:space-x-10">
    <Head>
      <Title>EatApp - Profile</Title>
    </Head>

    <div class="w-full space-y-8 pt-6 md:pt-24">
      <h1 class="text-center text-Black text-3xl font-bold leading-14">Profile</h1>
      <p class="text-center text-red-500 capitalize" v-if="errors.request">
        {{ errors.request }}
      </p>
      <form @submit.prevent="handleUpdateProfile" class="grid max-w-xl mx-auto">
        <p
          class="text-red-500 capitalize"
          v-if="
            !!errors.fullname ||
            !!errors.email ||
            !!errors.location ||
            !!errors.oldPassword ||
            !!errors.newPassword ||
            !!errors.newPasswordConfirm ||
            !!errors.request
          "
        >
          {{
            errors.fullname ||
            errors.email ||
            errors.location ||
            errors.oldPassword ||
            errors.newPassword ||
            errors.newPasswordConfirm ||
            errors.request
          }}
        </p>
        <UIInput
          v-for="input in inputs"
          :key="input.name"
          :type="input.type"
          :name="input.name"
          :placeholder="input.placeholder"
          class="shadow-lg border rounded-lg p-2 mb-2"
          :modelValue="input.value"
          :onValidate="validate"
          @update:modelValue="input.getValue"
        />
        <UIButton type="submit" class="btn rounded-md justify-self-center lg:ml-4">{{
          'update profile'
        }}</UIButton>
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
import { IReceiveProfileFromDB, IUpdateProfile, IUpdateProfileErrors } from '@/interfaces/profile';
import { useStoreProfile } from '@/stores/profile';
import { updateProfileSchema } from '@/validation/updateprofile.validation';
import { useProfileFormConfigs } from '@/composables/useProfileFormConfig';

definePageMeta({
  layout: 'profile',
  middleware: ['auth'],
});

const { inputs, form } = useProfileFormConfigs();

const { data } = await useFetch<IReceiveProfileFromDB | string>('/api/profile');

const storeProfile = useStoreProfile();
const profile = computed(() => storeProfile.getProfile);

if (typeof data.value !== 'string') {
  storeProfile.addToProfile({
    fullname: `${data.value?.customers.firstname} ${data.value?.customers.lastname}`,
    email: data.value?.customers.email!,
    location: `${data.value?.city}, ${data.value?.country}`,
  });
}

const errors = reactive<IUpdateProfileErrors>({
  fullname: '',
  email: '',
  location: '',
  oldPassword: '',
  newPassword: '',
  newPasswordConfirm: '',
  request: '',
});

if (typeof data.value === 'string') {
  errors.request = data.value;
}

const validate = async (field: keyof IUpdateProfileErrors) => {
  try {
    await updateProfileSchema.validateAt(field, form);
    errors[field] = '';
  } catch (error) {
    if (error instanceof Error) {
      errors[field] = error.message;
    } else {
      errors[field] = 'Unexpected error';
    }
  }
};

const handleUpdateProfile = async () => {
  await $fetch('/api/profile', {
    method: 'post',
    body: form,
  });

  form.oldPassword = '';
  form.newPassword = '';
  form.newPasswordConfirm = '';

  storeProfile.addToProfile(form);
  form.fullname = profile.value.fullname;
  form.email = profile.value.email;
  form.location = profile.value.location;
};
</script>
