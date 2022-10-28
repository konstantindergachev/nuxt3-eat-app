<template>
  <p>Cart ({{ cart.length }})</p>
</template>

<script setup>
const cart = useCart();
console.log('cart.value', cart.value); //FIXME: remove me
</script>
