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
    <div>
      <form @submit.prevent="handleCheckout" class="grid max-w-xl">
        <p class="text-red-500 capitalize" v-if="!!errors.firstname">
          {{ errors.firstname }}
        </p>
        <UIInput
          type="text"
          name="firstname"
          placeholder="First name"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getFirstname"
          :modelValue="form.firstname"
          :onValidate="validate"
        />
        <p class="text-red-500 capitalize" v-if="!!errors.lastname">
          {{ errors.lastname }}
        </p>
        <UIInput
          type="text"
          name="lastname"
          placeholder="Last name"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getLastname"
          :modelValue="form.lastname"
          :onValidate="validate"
        />
        <p class="text-red-500 capitalize" v-if="!!errors.notificationEmail">
          {{ errors.notificationEmail }}
        </p>
        <UIInput
          type="email"
          name="notificationEmail"
          placeholder="Notification email"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getNotificationEmail"
          :modelValue="form.notificationEmail"
          :onValidate="validate"
        />
        <p class="text-red-500 capitalize" v-if="!!errors.phone">
          {{ errors.phone }}
        </p>
        <UIInput
          type="text"
          name="phone"
          placeholder="Phone"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getPhone"
          :modelValue="form.phone"
          :onValidate="validate"
        />
        <p class="text-red-500 capitalize" v-if="!!errors.address">
          {{ errors.address }}
        </p>
        <UIInput
          type="text"
          name="address"
          placeholder="Address"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getAddress"
          :modelValue="form.address"
          :onValidate="validate"
        />
        <p class="text-red-500 capitalize" v-if="!!errors.addresseeFirstname">
          {{ errors.addresseeFirstname }}
        </p>
        <UIInput
          type="text"
          name="addresseeFirstname"
          placeholder="Addressee first name"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getAddresseeFirstname"
          :modelValue="form.addresseeFirstname"
          :onValidate="validate"
        />
        <p class="text-red-500 capitalize" v-if="!!errors.addresseeLastname">
          {{ errors.addresseeLastname }}
        </p>
        <UIInput
          type="text"
          name="addresseeLastname"
          placeholder="Addressee last name"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getAddresseeLastname"
          :modelValue="form.addresseeLastname"
          :onValidate="validate"
        />
        <p class="text-red-500 capitalize" v-if="!!errors.deliveryAddress">
          {{ errors.deliveryAddress }}
        </p>
        <UIInput
          type="text"
          name="deliveryAddress"
          placeholder="Delivery Address"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getDeliveryAddress"
          :modelValue="form.deliveryAddress"
          :onValidate="validate"
        />
        <p class="text-red-500 capitalize" v-if="!!errors.deliveryCountry">
          {{ errors.deliveryCountry }}
        </p>
        <UIInput
          type="text"
          name="deliveryCountry"
          placeholder="Delivery country"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getDeliveryCountry"
          :modelValue="form.deliveryCountry"
          :onValidate="validate"
        />
        <p class="text-red-500 capitalize" v-if="!!errors.deliveryCity">
          {{ errors.deliveryCity }}
        </p>
        <UIInput
          type="text"
          name="deliveryCity"
          placeholder="Delivery city"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getDeliveryCity"
          :modelValue="form.deliveryCity"
          :onValidate="validate"
        />
        <p class="text-red-500 capitalize" v-if="!!errors.deliveryPostalCode">
          {{ errors.deliveryPostalCode }}
        </p>
        <UIInput
          type="text"
          name="deliveryPostalCode"
          placeholder="Delivery postal code"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getDeliveryPostalCode"
          :modelValue="form.deliveryPostalCode"
          :onValidate="validate"
        />
        <UIButton type="submit" class="btn rounded-md justify-self-start">{{ 'Pay now' }}</UIButton>
      </form>
    </div>
    <div class="h-fit shadow-lg border rounded-lg p-4">
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
import {
  ICheckoutForm,
  ICheckoutErrors,
  ICheckoutOrder,
  ICheckoutProduct,
} from '@/interfaces/checkout';
import { useStoreBasket } from '@/stores/basket';
import { useUtilities } from '@/composables/useUtilities';
import { checkoutSchema } from '@/validation/checkout.validation';

const { moneyFormat } = useUtilities();

const storeBasket = useStoreBasket();
const products = computed(() => {
  return storeBasket.getBasketFruits.map((fruit) => ({
    id: fruit.id,
    name: fruit.name,
    count: fruit.count,
    price: fruit.price,
    popular: fruit.popular,
  })) as ICheckoutProduct[];
});
const totalPrice = computed(() => storeBasket.getBasketFruitsTotalPrice);

const form = reactive<ICheckoutForm>({
  firstname: '',
  lastname: '',
  notificationEmail: '',
  phone: '',
  address: '',
  addresseeFirstname: '',
  addresseeLastname: '',
  deliveryAddress: '',
  deliveryCountry: '',
  deliveryCity: '',
  deliveryPostalCode: '',
});
const errors = reactive<ICheckoutErrors>({
  firstname: '',
  lastname: '',
  notificationEmail: '',
  phone: '',
  address: '',
  addresseeFirstname: '',
  addresseeLastname: '',
  deliveryAddress: '',
  deliveryCountry: '',
  deliveryCity: '',
  deliveryPostalCode: '',
});

const getFirstname = (value: string) => {
  form.firstname = value;
};
const getLastname = (value: string) => {
  form.lastname = value;
};
const getNotificationEmail = (value: string) => {
  form.notificationEmail = value;
};
const getPhone = (value: string) => {
  form.phone = value;
};
const getAddress = (value: string) => {
  form.address = value;
};
const getAddresseeFirstname = (value: string) => {
  form.addresseeFirstname = value;
};
const getAddresseeLastname = (value: string) => {
  form.addresseeLastname = value;
};
const getDeliveryAddress = (value: string) => {
  form.deliveryAddress = value;
};
const getDeliveryCountry = (value: string) => {
  form.deliveryCountry = value;
};
const getDeliveryCity = (value: string) => {
  form.deliveryCity = value;
};
const getDeliveryPostalCode = (value: string) => {
  form.deliveryPostalCode = value;
};

const validate = async (field: keyof ICheckoutErrors) => {
  try {
    await checkoutSchema.validateAt(field, form);
    errors[field] = '';
  } catch (error) {
    if (error instanceof Error) {
      errors[field] = error.message;
    } else {
      errors[field] = 'Unexpected error';
    }
  }
};

const handleCheckout = async () => {
  const order: ICheckoutOrder = {
    info: form,
    basket: { products: products.value, total: totalPrice.value },
  };

  await $fetch('/api/checkout', {
    method: 'post',
    body: order,
  });

  form.firstname = '';
  form.lastname = '';
  form.notificationEmail = '';
  form.phone = '';
  form.address = '';
  form.addresseeFirstname = '';
  form.addresseeLastname = '';
  form.deliveryAddress = '';
  form.deliveryCountry = '';
  form.deliveryCity = '';
  form.deliveryPostalCode = '';
};
</script>
