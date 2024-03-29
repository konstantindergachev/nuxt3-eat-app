<template>
  <section class="container flex justify-center md:flex-row lg:justify-between lg:space-x-10">
    <Head>
      <Title>EatApp - Profile</Title>
    </Head>

    <div
      class="w-full pt-6 md:pt-24 lg:grid lg:auto-rows-auto lg:gap-5"
      :class="profile.image ? 'lg:grid-cols-2' : 'lg:grid-cols-1'"
    >
      <h1 class="text-center text-Black text-3xl font-bold leading-14 lg:col-span-full">Profile</h1>
      <div class="grid">
        <UIPopUp v-if="errors.request" :message="errors.request" error="error" class="mb-5" />
        <AppForm
          :onSubmit="handleSubmit"
          :inputs="inputs"
          :validate="validate"
          className="grid max-w-xl mx-auto mb-5 lg:mb-0"
          enctype="multipart/form-data"
        />
      </div>
      <div v-if="profile.image" class="relative w-fit m-auto lg:m-0">
        <UIButton
          type="button"
          class="btn-del absolute -top-8 right-0"
          :onClick="() => remove(profile.imageId)"
          >{{ '&#10005;' }}</UIButton
        >
        <img :src="profile.image" :alt="profile.fullname" class="w-60" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useProfile } from '~~/composables/useProfile';
import { useStoreProfile } from '~~/stores/profile';
definePageMeta({
  layout: 'profile',
  middleware: ['auth'],
});

const { handleSubmit, inputs, validate, errors, profile } = await useProfile();

const storeProfile = useStoreProfile();
const remove = async (imageId: string) => {
  await $fetch('/api/upload', {
    method: 'delete',
    body: JSON.stringify({ imageId }),
  });

  storeProfile.removeImageFromProfile();
};
</script>
