<template>
  <section
    class="container flex flex-col-reverse justify-center md:flex-row lg:justify-between lg:space-x-10"
  >
    <Head>
      <Title>EatApp - Orders</Title>
    </Head>

    <div class="w-full space-y-8 pt-6 md:pt-24">
      <h1 class="text-center text-Black text-3xl font-bold leading-14">Orders</h1>
      <div class="w-full">
        <ul class="flex gap-5 flex-wrap">
          <li v-for="order in orders" :key="order.id" class="text-left shadow-md my-10 p-5">
            <p class="leading-14">
              order id: <span class="text-Green">{{ order.id }}</span>
            </p>
            <p class="leading-14">
              created: <span class="text-Green">{{ order.created_at }}</span>
            </p>
            <p class="leading-14">
              total price:<span class="text-Green">{{ order.total }}</span>
            </p>
            <div class="leading-14 mt-5">
              <h3 class="underline">shipment:</h3>
              <p>
                fullname: <span class="text-Green">{{ order.shipment.fullname }}</span>
              </p>
              <p>
                phone: <span class="text-Green">{{ order.shipment.phone }}</span>
              </p>
              <p>
                country: <span class="text-Green">{{ order.shipment.country }}</span>
              </p>
              <p>
                city: <span class="text-Green">{{ order.shipment.city }}</span>
              </p>
              <p>
                address: <span class="text-Green">{{ order.shipment.address }}</span>
              </p>
              <div class="leading-14 mt-5">
                <h3 class="underline">products:</h3>
                <li
                  v-for="product in order.products"
                  :key="product.id"
                  class="text-left shadow-md mb-10 p-5 inline-block"
                >
                  <p class="leading-14">
                    title: <span class="text-Green">{{ product.title }}</span>
                  </p>
                  <p class="leading-14">
                    count: <span class="text-Green">{{ product.count }}</span>
                  </p>
                  <p class="leading-14">
                    price: <span class="text-Green">{{ product.price }} per 1 kg</span>
                  </p>
                </li>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'profile',
});

const orders = [
  {
    id: '1',
    created_at: new Date().toISOString(),
    total: 49,
    products: [
      {
        id: '1',
        title: 'apple',
        price: 8,
        count: 2,
      },
      {
        id: '2',
        title: 'plum',
        price: 11,
        count: 3,
      },
    ],
    shipment: {
      fullname: 'Tomas Magnum',
      phone: '+38(066) 724 5234',
      country: 'USA',
      city: 'LA, CA',
      address: 'The Sunset, 12 Ave.',
    },
    user: { id: '3' },
  },
  {
    id: '2',
    created_at: new Date().toISOString(),
    total: 46,
    products: [
      {
        id: '1',
        title: 'apple',
        price: 8,
        count: 3,
      },
      {
        id: '2',
        title: 'plum',
        price: 11,
        count: 2,
      },
    ],
    shipment: {
      fullname: 'Bob Hoskings',
      phone: '+38(097) 104 0234',
      country: 'England',
      city: 'London',
      address: 'The Tower Bridge, 65 Ave.',
    },
    user: { id: '3' },
  },
];
</script>
