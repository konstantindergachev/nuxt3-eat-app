<template>
  <section class="container flex flex-col lg:flex-row justify-between lg:space-x-10 mt-10 md:mt-32">
    <div class="w-full mb-10 text-center lg:text-left lg:w-6/12">
      <h1 class="text-Black text-3xl font-bold leading-14 mb-10">
        {{ delivery[0].title }}
      </h1>
      <p class="lg:max-w-xl text-Black opacity-70">
        {{ delivery[0].description }}
      </p>
    </div>
    <div class="w-full lg:w-6/12">
      <ul class="flex flex-col md:flex-row lg:flex-col">
        <li
          v-if="delivery[0].rules"
          v-for="rule in delivery[0].rules"
          :key="rule.id"
          class="flex items-center mb-10 space-x-2 md:space-x-4"
        >
          <span
            class="uppercase text-Green text-3xl font-bold leading-14 shadow-md rounded-full md:py-1 w-11 text-center"
            >{{ rule.id }}</span
          >
          <div>
            <h3 class="text-Black text-2xl font-bold leading-14">{{ rule.title }}</h3>
            <p class="text-Black opacity-70">{{ rule.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

>
<script setup lang="ts">
const { delivery } = defineProps(['delivery']);
</script>
