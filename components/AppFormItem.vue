<template>
  <p class="text-red-500 capitalize" v-if="!!input.error">
    {{ input.error.value }}
  </p>
  <FormItem
    :type="input.type"
    :name="input.name"
    :placeholder="input.placeholder"
    :modelValue="input.getValue.value"
    @update:modelValue="input.setValue"
    :onValidate="validate"
    :error="input.error"
    className="shadow-lg border rounded-lg p-2 mb-2"
  />
</template>
<script setup lang="ts">
const { input, validate } = defineProps(['input', 'validate']);

const { component: FormItem } = input;
</script>
