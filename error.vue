<template>
  <div
    class="relative container mx-auto p-6 min-h-screen grid grid-cols-[1fr] grid-rows-[auto,1fr,auto]"
  >
    <Head>
      <Title>EatApp - Error Page</Title>
    </Head>
    <div class="col-span-full">
      <TheHeader />
    </div>
    <main class="main flex flex-col items-center justify-evenly">
      <h1 class="text-center uppercase text-red-500 text-6xl font-bold leading-14 mb-10">
        {{ '404 Page' }}
      </h1>
      <img
        class="w-32"
        src="https://res.cloudinary.com/dmqomp5ba/image/upload/v1683010346/error/exclamation-mark_xcovrr.svg"
        alt="Sxclamation mark"
      />
      <UIButton type="button" class="btn btn-shape" :onClick="goBack">{{ 'back' }}</UIButton>

      <slot />
    </main>
    <div class="col-span-full">
      <TheFooter />
    </div>
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
const goBack = () => {
  router.back();
};
</script>
