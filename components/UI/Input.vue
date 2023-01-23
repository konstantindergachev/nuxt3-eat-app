<template>
  <input
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :class="className"
    @input="handleChange"
    :value="modelValue"
    @blur="onValidate(name)"
    @keypress="onValidate(name)"
  />
</template>
<script setup lang="ts">
import { IInput } from '@/interfaces/input';

const { type, name, placeholder, className, modelValue, onValidate }: IInput = defineProps([
  'type',
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
