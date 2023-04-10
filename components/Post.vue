<template>
  <form @submit.prevent="handleSignup" class="grid self-start max-w-xl lg:w-1/3">
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
    <p class="text-red-500 capitalize" v-if="!!errors.title">
      {{ errors.title }}
    </p>
    <UIInput
      type="text"
      name="title"
      placeholder="Enter your title"
      class="shadow-lg border rounded-lg p-2 mb-2"
      @update:modelValue="getTitle"
      :modelValue="form.title"
      :onValidate="validate"
    />
    <p class="text-red-500 capitalize" v-if="!!errors.text">
      {{ errors.text }}
    </p>
    <UITextArea
      name="text"
      placeholder="Enter your text"
      class="shadow-lg border rounded-lg p-2 mb-2"
      @update:modelValue="getText"
      :modelValue="form.text"
      :onValidate="validate"
    />
    <UIButton type="submit" class="btn rounded-md justify-self-center lg:ml-4">{{
      'send'
    }}</UIButton>
  </form>
</template>

<script setup lang="ts">
import { IPost, IPostErrors } from '@/interfaces/post';
import { postSchema } from '@/validation/post.validation';

const form = reactive<IPost>({
  fullname: '',
  title: '',
  text: '',
});
const errors = reactive<IPostErrors>({
  fullname: '',
  title: '',
  text: '',
  request: '',
});

const getFullname = (value: string) => {
  form.fullname = value;
};

const getTitle = (value: string) => {
  form.title = value;
};

const getText = (value: string) => {
  form.text = value;
};

const validate = async (field: keyof IPostErrors) => {
  try {
    await postSchema.validateAt(field, form);
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
  form.fullname = '';
  form.title = '';
  form.text = '';
};
</script>
