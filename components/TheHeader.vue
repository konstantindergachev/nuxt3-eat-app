<template>
  <header class="flex flex-col md:flex-row items-center justify-between space-y-4">
    <NuxtLink to="/">
      <img src="/images/logo.png" alt="logo" />
    </NuxtLink>
    <Navbar />
    <UIButton
      className="bg-Green text-White hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-tr-large rounded-bl-large px-3 py-1"
      path="/signup"
      >{{ 'sign up' }}</UIButton
    >
  </header>
</template>
