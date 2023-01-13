<template>
  <section
    class="container flex flex-col-reverse justify-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
  >
    <Head>
      <Title>EatApp - Profile</Title>
    </Head>

    <div class="text-center w-full space-y-8 pt-6 md:pt-24">
      <h1 class="text-Black text-3xl font-bold leading-14">Profile</h1>
    </div>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'profile',
});
</script>
