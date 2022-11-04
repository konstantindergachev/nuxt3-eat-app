<template>
  <section class="container flex justify-between space-x-10 mt-32">
    <div class="w-6/12 space-y-8 pt-32">
      <h4 class="uppercase text-xs">fresh fruit for you</h4>
      <h1 class="uppercase text-Green text-6xl font-bold leading-14">
        Eat as<br />
        you want
      </h1>
      <p class="max-w-xl text-Black opacity-70">
        Fruit and vegetables should be an important part of your daily diet. They are naturally good
        and contain vitamins and minerals that can help to keep you healthy.
      </p>
      <div class="space-x-10">
        <button
          class="bg-Green text-White hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-tr-large rounded-bl-large capitalize px-3 py-1"
        >
          add to cart
        </button>
        <button
          class="bg-White text-Green hover:bg-Green hover:text-White border-solid border-2 border-Green rounded-tr-large rounded-bl-large capitalize px-3 py-1"
        >
          learn more
        </button>
      </div>
    </div>
    <div class="w-6/12"><img src="/images/main_product.png" alt="Basket with fruits" /></div>
  </section>
  <section class="container flex justify-between space-x-10 mt-32">
    <div class="w-6/12"><img src="/images/product11.png" alt="Product 11" /></div>
    <div class="w-6/12 space-y-8 pt-32">
      <div class="flex space-x-4">
        <h1 class="text-Black text-3xl font-bold leading-14">
          Eat a banana for a<br />
          healthy snack
        </h1>
        <img src="/images/leath.png" alt="Leath" />
      </div>
      <p class="max-w-xl text-Black opacity-70">
        You should eat at least five serves of vegetables and two serves of fruit each day. Choose
        different colours and varieties.
      </p>
      <div class="w-full">
        <ul class="flex flex-wrap">
          <li class="flex justify-between items-center mb-10 order-1 space-x-4">
            <span
              class="uppercase text-Green text-3xl font-bold leading-14 shadow-md rounded-full py-1 w-11 text-center"
              >1</span
            >
            <div>
              <h3 class="uppercase text-Green text-6xl font-bold leading-14">150+</h3>
              <p class="capitalize">global franchises</p>
            </div>
          </li>
          <li class="flex justify-between items-center mb-10 order-3 space-x-4">
            <span
              class="uppercase text-Green text-3xl font-bold leading-14 shadow-md rounded-full py-1 w-11 text-center"
              >2</span
            >
            <div>
              <h3 class="uppercase text-Green text-6xl font-bold leading-14">100%</h3>
              <p class="capitalize">organic product</p>
            </div>
          </li>
          <li class="flex justify-between items-center mb-10 order-2 space-x-4">
            <span
              class="block ml-12 uppercase text-Green text-3xl font-bold leading-14 shadow-md rounded-full py-1 w-11 text-center"
              >3</span
            >
            <div>
              <h3 class="uppercase text-Green text-6xl font-bold leading-14">97%</h3>
              <p class="capitalize">happy customer</p>
            </div>
          </li>
          <li class="flex justify-between items-center mb-10 order-4 space-x-4">
            <span
              class="block ml-12 uppercase text-Green text-3xl font-bold leading-14 shadow-md rounded-full py-1 w-11 text-center"
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
  <section class="container flex justify-between space-x-10 mt-32">
    <div class="w-6/12">
      <h1 class="text-Black text-3xl font-bold leading-14 mb-10">
        Our purpose is to deliver<br />
        fresh fruit to you
      </h1>
      <p class="max-w-xl text-Black opacity-70">
        Fruits and vegetables contain many vitamins and minerals that are good for your health.
        These include vitamins
      </p>
    </div>
    <div class="w-6/12">
      <ul class="flex flex-col">
        <li class="flex items-center mb-10 order-1 space-x-8">
          <span
            class="uppercase text-Green text-3xl font-bold leading-14 shadow-md rounded-full py-1 w-11 text-center"
            >1</span
          >
          <div>
            <h3 class="text-Black text-2xl font-bold leading-14">Order Your Fruit</h3>
            <p class="text-Black opacity-70">A serve of fruit is about one medium piece</p>
          </div>
        </li>
        <li class="flex items-center mb-10 order-3 space-x-8">
          <span
            class="uppercase text-Green text-3xl font-bold leading-14 shadow-md rounded-full py-1 w-11 text-center"
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
  <section class="container grid grid-cols-3 mt-10">
    <div v-for="prod in products" :key="prod.id">
      <div class="grid grid-cols-1">
        <div class="flex justify-center items-center">
          <img :src="prod.img" :alt="prod.name" class="h-80" />
        </div>
      </div>
    </div>
  </section>
  <section class="container grid grid-cols-3 gap-4 mt-20">
    <div
      v-for="prod in topThreeProducts"
      :key="prod.id"
      class="grid shadow-lg border rounded-lg text-center p-10"
    >
      <div><img :src="prod.img" :alt="prod.name" /></div>

      <h1 class="text-3xl capitalize mb-4">{{ prod.name }}</h1>
      <span class="block text-Yellow text-3xl mb-4">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
      <h3 class="text-Green text-3xl font-bold mb-10">${{ prod.price }} kg</h3>
      <p class="opacity-70 mb-10">
        {{ prod.description }}
      </p>
      <button
        class="bg-Green text-White hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-tr-large rounded-bl-large px-3 py-1 justify-self-center h-10"
      >
        Buy Now
      </button>
    </div>
  </section>
  <section class="container flex justify-around items-center space-x-10 mt-32 shadow-lg rounded-lg">
    <img src="/images/product10.png" alt="Product 10" />
    <div class="space-y-8">
      <h1 class="text-Black text-3xl font-bold leading-14">Subscribe Newsletter</h1>
      <p class="max-w-xl text-Black opacity-70">
        Vegetables are available in many varieties and can be classified into biological groups or
        ‘families’, including:
      </p>
      <div class="w-full">
        <input type="text" placeholder="Enter your mail" class="shadow-lg border rounded-lg p-2" />
        <button
          class="bg-Green text-White hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-md px-3 py-1 justify-self-center h-10 ml-4"
        >
          Send
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
const products = useProducts();
const topThreeProducts = products.value.filter((product, idx) => idx <= 2 && product);
</script>
