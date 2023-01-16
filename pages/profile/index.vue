<template>
  <section
    class="container flex flex-col-reverse justify-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
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
          name="password_old"
          placeholder="Enter your old password"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getOldPassword"
          :modelValue="form.oldPassword"
        />
        <UIInput
          type="password"
          name="password_new"
          placeholder="Enter your password to confirm"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getNewPassword"
          :modelValue="form.newPassword"
        />
        <UIButton
          type="submit"
          className="bg-Green text-White capitalize hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-md px-3 py-1 justify-self-center h-10 lg:ml-4"
          >{{ 'send' }}</UIButton
        >
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'profile',
});

interface IUpdateProfile {
  fullname: string;
  email: string;
  oldPassword: string;
  newPassword: string;
}

const form = reactive<IUpdateProfile>({
  fullname: '',
  email: '',
  oldPassword: '',
  newPassword: '',
});

const getFullname = (value: string) => {
  form.fullname = value;
};
const getEmail = (value: string) => {
  form.email = value;
};
const getOldPassword = (value: string) => {
  form.oldPassword = value;
};
const getNewPassword = (value: string) => {
  form.newPassword = value;
};

const handleUpdateProfile = async () => {
  form.fullname = '';
  form.email = '';
  form.oldPassword = '';
  form.newPassword = '';
};
</script>
