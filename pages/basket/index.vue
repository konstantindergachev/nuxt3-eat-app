<template>
  <div>
    <Head><Title>EatApp - Basket</Title></Head>
    <section class="container m-auto flex flex-col gap-4 lg:justify-between mt-14 md:mt-32">
      <div
        class="w-full flex justify-around items-center shadow-lg border rounded-lg text-center p-10"
      >
        <UIImage imgSrc="product.img" imgName="product.name" className="flex justify-center" />
        <h2>{{ 'product.name' }}</h2>
        <h3>{{ '1' }}</h3>
        <div class="flex">
          <UIButton
            class="uppercase text-Green text-3xl font-bold leading-6 shadow-md rounded-full w-6 text-center cursor-pointer"
            onClick="decrease"
            >{{ '-' }}</UIButton
          >
          <p class="mx-2">$12</p>
          <UIButton
            class="uppercase text-Green text-2xl font-bold leading-6 shadow-md rounded-full w-6 text-center cursor-pointer"
            onClick="increase"
            >{{ '+' }}</UIButton
          >
        </div>
        <UIButton
          className=" bg-red-500 text-White capitalize hover:bg-White hover:text-red-500 border-solid border-2 border-red-500 rounded-md px-3 lg:ml-4 cursor-pointer"
          onClick="delete"
          >{{ '&#10005;' }}</UIButton
        >
      </div>
      <div
        class="w-full flex justify-around items-center shadow-lg border rounded-lg text-center p-10"
      >
        <UIImage imgSrc="product.img" imgName="product.name" className="flex justify-center" />
        <h2>{{ 'product.name' }}</h2>
        <h3>{{ '2' }}</h3>
        <div class="flex">
          <UIButton
            class="uppercase text-Green text-3xl font-bold leading-6 shadow-md rounded-full w-6 text-center cursor-pointer"
            onClick="decrease"
            >{{ '-' }}</UIButton
          >
          <p class="mx-2">$12</p>
          <UIButton
            class="uppercase text-Green text-2xl font-bold leading-6 shadow-md rounded-full w-6 text-center cursor-pointer"
            onClick="increase"
            >{{ '+' }}</UIButton
          >
        </div>
        <UIButton
          className=" bg-red-500 text-White capitalize hover:bg-White hover:text-red-500 border-solid border-2 border-red-500 rounded-md px-3 lg:ml-4 cursor-pointer"
          onClick="delete"
          >{{ '&#10005;' }}</UIButton
        >
      </div>
    </section>
  </div>
</template>
