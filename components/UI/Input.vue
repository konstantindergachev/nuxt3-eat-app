<template>
  <input
    :type="type"
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
import { IInput } from '~~/interfaces/input';

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
  const target = event.target as HTMLInputElement;

  if (type !== 'file') {
    emit('update:modelValue', target.value);
  } else {
    emit('update:modelValue', target.files);
  }
};
</script>
