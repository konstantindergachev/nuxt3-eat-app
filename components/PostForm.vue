<template>
  <form
    @submit.prevent="handleSignup"
    class="grid self-start mb-8 mr-8 max-w-xl md:w-1/3 float-none md:float-left"
  >
    <p class="text-Green capitalize" v-if="!!errors.request">
      {{ errors.request }}
    </p>
    <p class="text-red-500 capitalize" v-if="!!errors.fullname || !!errors.title || !!errors.text">
      {{ errors.fullname || errors.title || errors.text }}
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
      'send'
    }}</UIButton>
  </form>
</template>

<script setup lang="ts">
import { IReviewErrors, IReviewResponse } from '@/interfaces/review';
import { postSchema } from '@/validation/post.validation';
import { useStorePost } from '@/stores/post.js';
import { usePostFormConfigs } from '@/composables/usePostFormConfig';

const { inputs, form } = usePostFormConfigs();

const errors = reactive<IReviewErrors>({
  fullname: '',
  title: '',
  text: '',
  request: '',
});

const storePost = useStorePost();

const validate = async (field: keyof IReviewErrors) => {
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
  try {
    const response = await $fetch<IReviewResponse>('/api/reviews', {
      method: 'post',
      body: form,
    });
    errors.request = response.statusText;
    storePost.addPost(form);

    form.fullname = '';
    form.title = '';
    form.text = '';
  } catch (error) {
    if (error instanceof Error) {
      errors.request = error.message;
    }
  }
};
</script>
