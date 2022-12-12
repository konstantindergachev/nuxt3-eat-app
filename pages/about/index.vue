<template>
  <div>
    <Head><Title>EatApp - About us</Title></Head>
    <section
      class="container flex flex-col-reverse justify-center items-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
    >
      <div class="w-full lg:w-6/12">
        <img src="/images/about_us.png" alt="About us" />
      </div>
      <div class="w-full lg:w-6/12 space-y-8 pt-14 md:pt-32">
        <h1 class="uppercase text-Green text-6xl font-bold leading-14">
          we believe in organic foods for strong health
        </h1>
        <p class="text-Black opacity-70">
          Welcome to the world of natural and organic. Here you can discover the bounty of nature.
          We have grown on the principles of health, and care. We aim to give our customers a
          healthy chemical-free meal for perfect nutrition.
        </p>
        <div class="w-full">
          <ul class="flex flex-wrap">
            <li class="flex justify-between items-center mb-10 space-x-24 md:space-x-4">
              <img src="/images/food.svg" alt="Food icon" class="w-10 text-center" />

              <div class="text-Black opacity-70">
                <h3 class="uppercase text-2xl leading-14">organic foods only</h3>
                <p>
                  The product that you ordered will be verified that we have or not if have we will
                  start to move on with the next step.
                </p>
              </div>
            </li>
            <li class="flex justify-between items-center mb-10 space-x-24 md:space-x-4">
              <img src="/images/delivery.svg" alt="Delivery icon" class="w-10 text-center" />
              <div class="text-Black opacity-70">
                <h3 class="uppercase text-2xl leading-14">quality standards</h3>
                <p>
                  Once your product is packed it will be delivered to your nearby locality you can
                  directly visit the to buy the product.
                </p>
              </div>
            </li>
          </ul>
          <UIButton
            className="bg-Green text-White hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-tr-large rounded-bl-large capitalize px-3 py-1"
            path="/fruits"
            >{{ 'shop now' }}</UIButton
          >
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const url = 'https://reqres.in/api/users/2';
onMounted(async () => {
  const { data, error } = await useFetch(url);
  if (data.value) {
    console.log('data', data.value.data); //FIXME: remove me
  } else {
    console.log('error', error.value); //FIXME: remove me
  }
});
</script>
<!-- time: 02:23:20 speed: 1.46 part: 3 Kinds of Middleware -->
