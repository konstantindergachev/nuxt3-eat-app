<template>
  <section
    class="container grid grid-cols-[24rem,12rem] grid-rows-[auto,1fr,auto] gap-4 justify-evenly"
  >
    <Head>
      <Title>EatApp - Checkout</Title>
    </Head>

    <h1 class="text-center text-Black text-3xl font-bold leading-14 col-span-full mt-10">
      Checkout
    </h1>

    <AppForm
      :onSubmit="handleSubmit"
      :inputs="inputs"
      :validate="validate"
      className="grid max-w-xl"
    />

    <div class="h-fit shadow-lg border rounded-lg p-4 relative">
      <UIPopUp
        v-if="message || errors.request"
        :message="message"
        :error="error"
        class="absolute bg-white w-full mt-40 -ml-4"
      />
      <div v-for="prod in products" :key="prod.id" class="mb-4">
        <h2 class="underline capitalize">{{ prod.name }}:</h2>
        <h3 class="indent-10">
          count: <span>{{ prod.count }}</span>
        </h3>
        <h3 class="indent-10">
          price: <span>{{ moneyFormat('en-US', 'USD', prod.price! * prod.count) }}</span>
        </h3>
      </div>
      <h3 class="capitalize text-Green">
        total: <span>{{ moneyFormat('en-US', 'USD', totalPrice) }}</span>
      </h3>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useCheckout } from '~~/composables/useCheckout';
const { handleSubmit, inputs, validate, errors, message, products, totalPrice } = useCheckout();
const { moneyFormat } = useUtilities();

const error = ref<string>('');
onUpdated(() => {
  error.value = errors.request;
});
</script>
