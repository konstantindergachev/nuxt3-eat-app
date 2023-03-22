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
        <p class="text-red-500 capitalize" v-if="!!errors.fullname">
          {{ errors.fullname }}
        </p>
        <UIInput
          type="text"
          name="fullname"
          placeholder="Full name"
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
          placeholder="Email"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getEmail"
          :modelValue="form.email"
          :onValidate="validate"
        />
        <p class="text-red-500 capitalize" v-if="!!errors.location">
          {{ errors.location }}
        </p>
        <UIInput
          type="text"
          name="location"
          placeholder="City, Country"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getLocation"
          :modelValue="form.location"
          :onValidate="validate"
        />
        <p class="text-red-500 capitalize" v-if="!!errors.oldPassword">
          {{ errors.oldPassword }}
        </p>
        <UIInput
          type="password"
          name="oldPassword"
          placeholder="Old password"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getOldPassword"
          :modelValue="form.oldPassword"
          :onValidate="validate"
        />
        <p class="text-red-500 capitalize" v-if="!!errors.newPassword">
          {{ errors.newPassword }}
        </p>
        <UIInput
          type="password"
          name="newPassword"
          placeholder="New password"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getNewPassword"
          :modelValue="form.newPassword"
          :onValidate="validate"
        />
        <p class="text-red-500 capitalize" v-if="!!errors.newPasswordConfirm">
          {{ errors.newPasswordConfirm }}
        </p>
        <UIInput
          type="password"
          name="newPasswordConfirm"
          placeholder="New password confirm"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getNewPasswordConfirm"
          :modelValue="form.newPasswordConfirm"
          :onValidate="validate"
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

definePageMeta({
  layout: 'profile',
  middleware: ['auth'],
});

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

const form = reactive<IUpdateProfile>({
  fullname: profile.value.fullname,
  email: profile.value.email,
  location: profile.value.location,
  oldPassword: '',
  newPassword: '',
  newPasswordConfirm: '',
});

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

const getFullname = (value: string) => {
  form.fullname = value;
};
const getEmail = (value: string) => {
  form.email = value;
};
const getLocation = (value: string) => {
  form.location = value;
};
const getOldPassword = (value: string) => {
  form.oldPassword = value;
};
const getNewPassword = (value: string) => {
  form.newPassword = value;
};
const getNewPasswordConfirm = (value: string) => {
  form.newPasswordConfirm = value;
};

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
