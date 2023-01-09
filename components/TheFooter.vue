<template>
  <footer class="container flex flex-col md:flex-row justify-between items-stretch gap-10">
    <div class="flex flex-col items-center w-full md:w-1/2">
      <NuxtLink to="/" class="mb-8">
        <img src="/images/logo.png" alt="logo" />
      </NuxtLink>
      <p class="opacity-70 text-center md:text-left">
        Lorem ipsum dolor sit amet, consectetur adipin elit. A eleifend tristique condimentum
        vestibulum, ornare tortor viverra.
      </p>
    </div>
    <div class="flex flex-col items-center w-full md:w-1/5">
      <h4 class="text-Black text-2xl font-bold leading-14 mb-8 capitalize">company</h4>
      <ul class="capitalize opacity-70">
        <NuxtLink to="/about"><li class="mb-2">about us</li></NuxtLink>
        <NuxtLink to="/faq"><li class="mb-2">FAQ</li></NuxtLink>
        <NuxtLink to="/location"><li>contact us</li></NuxtLink>
      </ul>
    </div>
    <div class="flex flex-col items-center w-full md:w-1/5">
      <h4 class="text-Black text-2xl font-bold leading-14 mb-8 capitalize">news</h4>
      <ul class="capitalize opacity-70">
        <NuxtLink to="/features"><li class="mb-2">features</li></NuxtLink>
        <NuxtLink to="/terms"><li class="mb-2">terms of servive</li></NuxtLink>
        <NuxtLink to="/privacy"><li>privacy</li></NuxtLink>
      </ul>
    </div>
    <div class="flex flex-col items-center w-full md:w-1/5">
      <h4 class="text-Black text-2xl font-bold leading-14 mb-8 capitalize">socials</h4>
      <ul class="flex">
        <a href="#">
          <li class="w-10 py-2 mr-6 shadow-md rounded-full">
            <img src="/images/facebook.svg" alt="Facebook" class="m-auto" />
          </li>
        </a>
        <a href="#">
          <li class="w-10 py-2 mr-6 shadow-md rounded-full">
            <img src="/images/instagram.svg" alt="Instagram" class="m-auto" />
          </li>
        </a>
        <a href="#">
          <li class="w-10 py-2 mr-6 shadow-md rounded-full">
            <img src="/images/twitter.svg" alt="Twitter" class="m-auto" />
          </li>
        </a>
      </ul>
    </div>
    <div class="flex flex-col items-center">
      <img src="/images/product12.png" alt="Product 12" />
    </div>
  </footer>
</template>
