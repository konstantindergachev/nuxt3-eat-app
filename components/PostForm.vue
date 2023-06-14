<template>
  <p class="text-Green capitalize" v-if="!!errors.request">
    {{ errors.request }}
  </p>
  <TheForm
    :onSubmit="handleSubmit"
    :inputs="inputs"
    :validate="validate"
    className="grid self-start mb-8 mr-8 max-w-xl md:w-1/3 float-none md:float-left"
  />
</template>

<script setup lang="ts">
import { usePost } from '~~/composables/usePost';

const { inputs, validate, handleSubmit, errors } = usePost();
</script>
