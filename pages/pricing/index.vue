<template>
  <div>
    <Head><Title>EatApp - Nuxtjs</Title></Head>
    <h1>Hello Nuxt</h1>
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
