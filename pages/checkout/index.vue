<template>
  <section
    class="container flex flex-col-reverse justify-center md:flex-row lg:justify-between lg:space-x-10"
  >
    <Head>
      <Title>EatApp - Checkout</Title>
    </Head>

    <div class="text-center w-full space-y-8 pt-6 md:pt-24">
      <h1 class="text-Black text-3xl font-bold leading-14">Checkout</h1>
      <form @submit.prevent="handleCheckout" class="grid max-w-xl mx-auto">
        <UIInput
          type="text"
          name="firstname"
          placeholder="First name"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getFirstname"
          :modelValue="form.firstname"
        />
        <UIInput
          type="text"
          name="lastname"
          placeholder="Last name"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getLastname"
          :modelValue="form.lastname"
        />
        <UIInput
          type="email"
          name="notificationEmail"
          placeholder="Notification email"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getNotificationEmail"
          :modelValue="form.notificationEmail"
        />
        <UIInput
          type="text"
          name="phone"
          placeholder="Phone"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getPhone"
          :modelValue="form.phone"
        />
        <UIInput
          type="text"
          name="address"
          placeholder="Address"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getAddress"
          :modelValue="form.address"
        />
        <UIInput
          type="text"
          name="addresseeFirstname"
          placeholder="Addressee first name"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getAddresseeFirstname"
          :modelValue="form.addresseeFirstname"
        />
        <UIInput
          type="text"
          name="addresseeLastname"
          placeholder="Addressee last name"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getAddresseeLastname"
          :modelValue="form.addresseeLastname"
        />
        <UIInput
          type="text"
          name="deliveryAddress"
          placeholder="Delivery Address"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getDeliveryAddress"
          :modelValue="form.deliveryAddress"
        />
        <UIInput
          type="text"
          name="deliveryCountry"
          placeholder="Delivery Country"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getDeliveryCountry"
          :modelValue="form.deliveryCountry"
        />
        <UIInput
          type="text"
          name="deliveryCity"
          placeholder="Delivery city"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getDeliveryCity"
          :modelValue="form.deliveryCity"
        />
        <UIInput
          type="text"
          name="deliveryPostalCode"
          placeholder="Delivery postal code"
          class="shadow-lg border rounded-lg p-2 mb-2"
          @update:modelValue="getDeliveryPostalCode"
          :modelValue="form.deliveryPostalCode"
        />
        <UIButton
          type="submit"
          className="bg-Green text-White capitalize hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-md px-3 py-1 justify-self-center h-10 lg:ml-4"
          >{{ 'Pay now' }}</UIButton
        >
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ICheckout } from '@/interfaces/checkout';

const form = reactive<ICheckout>({
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

const handleCheckout = async () => {
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
