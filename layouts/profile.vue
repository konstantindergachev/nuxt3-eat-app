<template>
  <div
    class="relative container mx-auto p-6 min-h-screen grid grid-cols-[12rem,1fr] grid-rows-[auto,1fr,auto]"
  >
    <div class="col-span-full">
      <TheHeader />
    </div>
    <ul class="flex flex-col mt-4 space-y-4 items-left">
      <li>
        <NuxtLink
          to="/profile"
          activeClass="border-b-2 border-b-Green"
          class="border-transparent border-b-2 hover:border-b-Green capitalize block"
          >profile</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/orders"
          class="border-transparent border-b-2 hover:border-b-Green capitalize block"
          >orders</NuxtLink
        >
      </li>
    </ul>
    <main class="main">
      <slot />
      <hr class="bg-Black w-full h-0.5 mb-20 opacity-40" />
    </main>
    <div class="col-span-full">
      <TheFooter />
    </div>
  </div>
</template>
