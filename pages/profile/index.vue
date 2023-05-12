<template>
  <section class="container flex justify-center md:flex-row lg:justify-between lg:space-x-10">
    <Head>
      <Title>EatApp - Profile</Title>
    </Head>

    <div
      class="w-full space-y-8 pt-6 md:pt-24 lg:grid lg:auto-rows-auto lg:gap-5"
      :class="profile.image ? 'lg:grid-cols-2' : 'lg:grid-cols-1'"
    >
      <h1 class="text-center text-Black text-3xl font-bold leading-14 lg:col-span-full">Profile</h1>
      <p class="text-center text-red-500 capitalize" v-if="errors.request">
        {{ errors.request }}
      </p>
      <TheForm
        :onSubmit="handleSubmit"
        :inputs="inputs"
        :validate="validate"
        className="grid max-w-xl mx-auto"
        enctype="multipart/form-data"
      />
      <img v-if="profile.image" :src="profile.image" :alt="profile.fullname" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { useProfile } from '@/composables/useProfile';

definePageMeta({
  layout: 'profile',
  middleware: ['auth'],
});

const { handleSubmit, inputs, validate, errors, profile } = await useProfile();
</script>
