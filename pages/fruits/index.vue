<template>
  <section v-if="data">
    <Head>
      <Title>EatApp - Fruits</Title>
    </Head>
    <h1 class="text-center mt-20 uppercase">Fruits</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      <UICard v-for="fruit in fruits" :key="fruit.id">
        <div class="grid grid-cols-1">
          <UIImage :imgSrc="fruit.img" :imgName="fruit.name" className="h-80" />
          <UIText>{{ fruit.name }}</UIText>
          <UIButton
            className="btn btn-shape justify-self-center self-end"
            :path="`/fruits/${fruit.id}`"
            >{{ 'details' }}</UIButton
          >
        </div>
      </UICard>
    </div>
    <UIButton type="button" class="btn mt-10" :onClick="getMore">{{ 'more' }}</UIButton>
  </section>
  <section v-else class="flex justify-center items-center mt-10"><UILoader /></section>
</template>
<script setup lang="ts">
import { IFruit } from '@/interfaces/fruits';
import { useStoreFruit } from '@/stores/fruit';

const { data } = await useFetch<IFruit[]>('/api/fruits');

const storeFruit = useStoreFruit();
if (data.value) {
  storeFruit.addFruits(data.value);
}

const fruits = computed(() => storeFruit.getFruits);

const getMore = async () => {
  const data = await $fetch('/api/fruits', {
    method: 'get',
    query: { fruitsLength: fruits.value.length },
  });

  storeFruit.addFruits([...fruits.value, ...data]);
};
</script>
