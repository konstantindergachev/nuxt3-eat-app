<template>
  <div>
    <Head><Title>EatApp - FAQ</Title></Head>
    <section
      class="container flex flex-col-reverse justify-center items-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
    >
      <h1 class="uppercase text-Green text-6xl font-bold leading-14">
        {{ 'Frequently Asked Questions' }}
      </h1>

      <div class="w-full">
        <ul class="flex flex-col">
          <li class="flex justify-between items-center mb-10 space-x-24 md:space-x-4">
            <div class="text-Black opacity-70">
              <h3 class="uppercase text-2xl leading-14">{{ 'question #1' }}</h3>
              <p>{{ 'answer #1' }}</p>
            </div>
          </li>
          <li class="flex justify-between items-center mb-10 space-x-24 md:space-x-4">
            <div class="text-Black opacity-70">
              <h3 class="uppercase text-2xl leading-14">{{ 'question #2' }}</h3>
              <p>{{ 'answer #2' }}</p>
            </div>
          </li>
          <li class="flex justify-between items-center mb-10 space-x-24 md:space-x-4">
            <div class="text-Black opacity-70">
              <h3 class="uppercase text-2xl leading-14">{{ 'question #3' }}</h3>
              <p>{{ 'answer #3' }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
