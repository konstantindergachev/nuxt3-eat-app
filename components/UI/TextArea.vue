<template>
  <textarea
    :name="name"
    :placeholder="placeholder"
    @input="handleChange"
    :value="modelValue"
    @blur="onValidate(name)"
    @keypress="onValidate(name)"
    :class="className"
  />
</template>
<script setup lang="ts">
import { IInput } from '@/interfaces/input';

const { name, placeholder, className, modelValue, onValidate }: IInput = defineProps([
  'name',
  'placeholder',
  'className',
  'modelValue',
  'onValidate',
]);
const emit = defineEmits(['update:modelValue']);
const handleChange = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>
