<template>
  <form @submit.prevent="onSubmit" :class="className">
    <AppFormItem v-for="input in inputs" :key="input.name" :input="input" :validate="validate" />
    <UIButton type="submit" class="btn rounded-md justify-self-center lg:ml-4">{{
      'send'
    }}</UIButton>
  </form>
</template>
<script setup lang="ts">
const { onSubmit, inputs, validate, className } = defineProps([
  'onSubmit',
  'inputs',
  'validate',
  'className',
]);
</script>
