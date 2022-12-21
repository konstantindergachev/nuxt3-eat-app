<template>
  <section
    class="container flex flex-col-reverse justify-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
  >
    <div class="w-full text-center lg:w-6/12 space-y-8 pt-14 md:pt-32">
      <h4 class="uppercase text-xs">{{ title }}</h4>
      <h1 class="uppercase text-Green text-6xl font-bold leading-14">
        {{ subtitle }}
      </h1>
      <p class="text-Black opacity-70">
        {{ description }}
      </p>
      <div class="space-x-10">
        <UIButton
          className="bg-Green text-White hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-tr-large rounded-bl-large capitalize px-3 py-1"
          >{{ 'add to cart' }}</UIButton
        >
        <UIButton
          className="bg-White text-Green hover:bg-Green hover:text-White border-solid border-2 border-Green rounded-tr-large rounded-bl-large capitalize px-3 py-1"
          >{{ 'learn more' }}</UIButton
        >
      </div>
    </div>
    <div class="w-full lg:w-6/12">
      <img src="/images/main_product.png" alt="Basket with fruits" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { IBanner } from '@/interfaces/thebanner';
const { title, subtitle, description }: IBanner = defineProps(['title', 'subtitle', 'description']);
</script>
