<template>
  <section
    class="container flex flex-col-reverse justify-center md:flex-row lg:justify-between lg:space-x-10"
  >
    <Head>
      <Title>EatApp - Profile</Title>
    </Head>

    <div class="text-center w-full space-y-8 pt-6 md:pt-24">
      <h1 class="text-Black text-3xl font-bold leading-14">Profile</h1>
      <form @submit.prevent="handleUpdateProfile" class="grid max-w-xl mx-auto">
        <UIInput
          type="text"
          name="fullname"
          placeholder="Full name"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getFullname"
          :modelValue="form.fullname"
        />
        <UIInput
          type="email"
          name="email"
          placeholder="Email"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getEmail"
          :modelValue="form.email"
        />
        <UIInput
          type="text"
          name="location"
          placeholder="City, Country"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getLocation"
          :modelValue="form.location"
        />
        <UIInput
          type="password"
          name="password_old"
          placeholder="Old password"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getOldPassword"
          :modelValue="form.oldPassword"
        />
        <UIInput
          type="password"
          name="password_new"
          placeholder="New password"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getNewPassword"
          :modelValue="form.newPassword"
        />
        <UIButton
          type="submit"
          className="bg-Green text-White capitalize hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-md px-3 py-1 justify-self-center h-10 lg:ml-4"
          >{{ 'update profile' }}</UIButton
        >
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
import { IUpdateProfile } from '@/interfaces/profile';
import { useStoreProfile } from '@/stores/profile';

definePageMeta({
  layout: 'profile',
});

const form = reactive<IUpdateProfile>({
  fullname: '',
  email: '',
  location: '',
  oldPassword: '',
  newPassword: '',
});

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

const storeProfile = useStoreProfile();

const handleUpdateProfile = async () => {
  await $fetch('/api/profile', {
    method: 'post',
    body: form,
  });

  form.oldPassword = '';
  form.newPassword = '';

  storeProfile.addToProfile(form);
  const profile = computed(() => storeProfile.getProfile);
  form.fullname = profile.value.fullname;
  form.email = profile.value.email;
  form.location = profile.value.location;
};
</script>
