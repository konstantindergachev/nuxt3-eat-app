<template>
  <div
    class="relative container mx-auto p-6 min-h-screen lg:grid lg:grid-cols-[12rem,1fr] lg:grid-rows-[auto,1fr,auto]"
  >
    <div class="col-span-full">
      <TheHeader />
    </div>
    <ul class="flex justify-evenly mt-8 lg:flex-col lg:space-y-4 lg:items-center lg:justify-start">
      <li>
        <NuxtLink
          to="/profile"
          activeClass="border-b-2 border-b-Green"
          class="border-transparent border-b-2 hover:border-b-Green capitalize"
          >profile</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/orders"
          activeClass="border-b-2 border-b-Green"
          class="border-transparent border-b-2 hover:border-b-Green capitalize"
          >orders</NuxtLink
        >
      </li>
    </ul>
    <main class="main">
      <slot />
    </main>
    <div class="col-span-full">
      <TheFooter />
    </div>
  </div>
</template>
