<template>
  <div class="relative w-full">
    <Head>
      <Title>EatApp - About</Title>
    </Head>

    <section
      class="container flex flex-col-reverse justify-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
    >
      <div class="w-full text-left lg:w-6/12 space-y-6 pt-14 md:pt-32">
        <h1 class="uppercase text-Green text-6xl font-bold leading-14">
          What Our Customers <br />
          About Us saying
        </h1>
        <p class="text-Black opacity-70">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularis
        </p>
        <h4 class="uppercase text-xs">Ahmed Hridoy</h4>
        <UIStar> &#9733; &#9733; &#9733; &#9733; &#9733; </UIStar>
        <div class="space-x-10 absolute bottom-0 right-0">
          <UIButton
            className="text-Green hover:bg-Green hover:text-White text-2xl shadow-md rounded-full px-3 cursor-pointer"
            >{{ '&#8249;' }}</UIButton
          >
          <UIButton
            className="text-Green hover:bg-Green hover:text-White text-2xl shadow-md rounded-full px-3 cursor-pointer"
            >{{ '&#8250;' }}</UIButton
          >
        </div>
      </div>
      <div class="w-full lg:w-6/12 flex justify-center items-center">
        <img src="/images/man1.png" alt="First man" />
      </div>
    </section>
  </div>
</template>
