<template>
  <section
    class="m-auto shadow-lg border rounded-lg text-center p-2"
    :class="error ? 'text-red-500' : 'text-Green'"
  >
    <p>{{ message }}</p>
  </section>
</template>
<script setup lang="ts">
import { IPopUp } from '~~/interfaces/popup';

const { message, error }: IPopUp = defineProps(['message', 'error']);
</script>
