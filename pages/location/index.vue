<template>
  <section
    v-if="data"
    class="container flex flex-col-reverse justify-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
  >
    <Head>
      <Title>EatApp - Location</Title>
    </Head>

    <div class="w-full lg:w-6/12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.830659433388!2d-80.33514939999999!3d25.8091602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9630abc89e5%3A0x2fb49261ffb15a81!2s8484%20NW%2036th%20St%2C%20Doral%2C%20FL%2033166%2C%20USA!5e0!3m2!1sen!2sua!4v1671108689807!5m2!1sen!2sua"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-[42rem] h-[28rem] max-w-full"
      ></iframe>
    </div>

    <div class="w-full text-center lg:w-6/12 space-y-8 pt-6 md:pt-24">
      <h1 class="text-Black text-3xl font-bold leading-14">Location</h1>
      <ul class="flex flex-col md:flex-row lg:flex-col">
        <li class="flex items-center mb-10 order-1 space-x-2 md:space-x-4">{{ data.city }}</li>
        <li class="flex items-center mb-10 order-1 space-x-2 md:space-x-4">
          {{ data.address }}
        </li>
        <li class="flex items-center mb-10 order-1 space-x-2 md:space-x-4">{{ data.phone }}</li>
        <li class="flex items-center mb-10 order-1 space-x-2 md:space-x-4">
          <span class="uppercase">{{ data.hours.weekend }}</span>
          <span class="uppercase">{{ data.hours.casual }}</span>
        </li>
      </ul>
    </div>
  </section>
  <section v-else class="flex justify-center items-center mt-10"><UILoader /></section>
</template>
<script setup lang="ts">
import { ILocation } from '@/interfaces/location';

const { data } = await useFetch<ILocation>('/api/location', { lazy: true });
</script>
