<template>
  <section
    class="container flex flex-col-reverse justify-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
  >
    <div class="w-full text-center lg:w-6/12 space-y-8 pt-14 md:pt-32">
      <h4 class="uppercase text-xs">fresh fruit for you</h4>
      <h1 class="uppercase text-Green text-6xl font-bold leading-14">
        Eat as<br />
        you want
      </h1>
      <p class="text-Black opacity-70">
        Fruit and vegetables should be an important part of your daily diet. They are naturally good
        and contain vitamins and minerals that can help to keep you healthy.
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
  <section class="container flex flex-col lg:flex-row justify-between lg:space-x-10 mt-14 md:mt-32">
    <div class="w-full lg:w-6/12">
      <img src="/images/product11.png" alt="Product 11" />
    </div>
    <div class="w-full lg:w-6/12 space-y-8 pt-14 md:pt-32">
      <div class="flex lg:space-x-4">
        <h1 class="text-Black text-3xl font-bold leading-14 text-center md:text-left">
          Eat a banana for a<br />
          healthy snack
        </h1>
        <img src="/images/leath.png" alt="Leath" class="hidden md:block" />
      </div>
      <p class="lg:max-w-xl text-Black opacity-70 text-center md:text-left">
        You should eat at least five serves of vegetables and two serves of fruit each day. Choose
        different colours and varieties.
      </p>
      <div class="w-full">
        <ul class="flex flex-wrap">
          <li class="flex justify-between items-center mb-10 order-1 space-x-24 md:space-x-4">
            <span
              class="uppercase text-Green text-3xl font-bold leading-14 shadow-md rounded-full py-1 w-11 text-center"
              >1</span
            >
            <div>
              <h3 class="uppercase text-Green text-6xl font-bold leading-14">150+</h3>
              <p class="capitalize">global franchises</p>
            </div>
          </li>
          <li class="flex justify-between items-center mb-10 order-3 space-x-24 md:space-x-4">
            <span
              class="uppercase text-Green text-3xl font-bold leading-14 shadow-md rounded-full py-1 w-11 text-center"
              >2</span
            >
            <div>
              <h3 class="uppercase text-Green text-6xl font-bold leading-14">100%</h3>
              <p class="capitalize">organic product</p>
            </div>
          </li>
          <li class="flex justify-between items-center mb-10 order-2 space-x-24 md:space-x-4">
            <span
              class="block md:ml-12 uppercase text-Green text-3xl font-bold leading-14 shadow-md rounded-full py-1 w-11 text-center"
              >3</span
            >
            <div>
              <h3 class="uppercase text-Green text-6xl font-bold leading-14">97%</h3>
              <p class="capitalize">happy customer</p>
            </div>
          </li>
          <li class="flex justify-between items-center mb-10 order-4 space-x-24 md:space-x-4">
            <span
              class="block md:ml-12 uppercase text-Green text-3xl font-bold leading-14 shadow-md rounded-full py-1 w-11 text-center"
              >4</span
            >
            <div>
              <h3 class="uppercase text-Green text-6xl font-bold leading-14">10m+</h3>
              <p class="capitalize">monthly sales</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="container flex flex-col lg:flex-row justify-between lg:space-x-10 mt-14 md:mt-32">
    <div class="w-full mb-10 text-center lg:text-left lg:w-6/12">
      <h1 class="text-Black text-3xl font-bold leading-14 mb-10">
        Our purpose is to deliver<br />
        fresh fruit to you
      </h1>
      <p class="lg:max-w-xl text-Black opacity-70">
        Fruits and vegetables contain many vitamins and minerals that are good for your health.
        These include vitamins
      </p>
    </div>
    <div class="w-full lg:w-6/12">
      <ul class="flex flex-col md:flex-row lg:flex-col">
        <li class="flex items-center mb-10 order-1 space-x-2 md:space-x-4">
          <span
            class="uppercase text-Green text-3xl font-bold leading-14 shadow-md rounded-full md:py-1 w-11 text-center"
            >1</span
          >
          <div>
            <h3 class="text-Black text-2xl font-bold leading-14">Order Your Fruit</h3>
            <p class="text-Black opacity-70">A serve of fruit is about one medium piece</p>
          </div>
        </li>
        <li class="flex items-center mb-10 order-3 space-x-2 md:space-x-4">
          <span
            class="uppercase text-Green text-3xl font-bold leading-14 shadow-md rounded-full md:py-1 w-11 text-center"
            >2</span
          >
          <div>
            <h3 class="text-Black text-2xl font-bold leading-14">Delivery and Pickup</h3>
            <p class="text-Black opacity-70">A serve of vegetables is about one cup of raw</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14 md:mt-20">
    <UICard v-for="prod in topThreeProducts" :key="prod.id">
      <UIImage :imgSrc="prod.img" :imgName="prod.name" />
      <UITitle>{{ prod.name }}</UITitle>
      <UIStar> &#9733; &#9733; &#9733; &#9733; &#9733; </UIStar>
      <h3 class="text-Green text-3xl font-bold mb-10">${{ prod.price }} kg</h3>
      <p class="opacity-70 mb-10">
        {{ prod.description }}
      </p>
      <UIButton
        className="bg-Green text-White capitalize hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-tr-large rounded-bl-large px-3 py-1 justify-self-center h-10"
        >{{ 'buy now' }}</UIButton
      >
    </UICard>
  </section>
  <section
    class="container flex flex-col md:flex-row justify-around items-center md:space-x-10 mt-14 md:mt-32 mb-12 shadow-lg rounded-lg p-4"
  >
    <img src="/images/product10.png" alt="Product 10" />
    <div class="space-y-8 pb-10">
      <h1 class="text-Black text-3xl font-bold leading-14 text-center md:text-left">
        Subscribe Newsletter
      </h1>
      <p class="max-w-xl text-Black opacity-70 text-center md:text-left">
        Vegetables are available in many varieties and can be classified into biological groups or
        ‘families’, including:
      </p>
      <div class="w-full">
        <input type="text" placeholder="Enter your mail" class="shadow-lg border rounded-lg p-2" />
        <UIButton
          className="bg-Green text-White capitalize hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-md px-3 py-1 justify-self-center h-10 lg:ml-4"
          >{{ 'send' }}</UIButton
        >
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { IFruits } from '../interfaces/fruits';

const { data } = await useLazyFetch<IFruits>('http://localhost:3000/api/fruits');
const topThreeProducts = data.value?.fruits.filter((product, idx) => idx <= 2 && product);
</script>
