<template>
  <section class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14 md:mt-20">
    <UICard v-for="prod in topThreeProducts" :key="prod.id">
      <UIImage :imgSrc="prod.img" :imgName="prod.name" />
      <UITitle>{{ prod.name }}</UITitle>
      <UIStar> &#9733; &#9733; &#9733; &#9733; &#9733; </UIStar>
      <UISubtitle> {{ moneyFormat('en-US', 'USD', prod.price) }} kg </UISubtitle>
      <UIText>{{ prod.description }}</UIText>
      <UIButton
        className="bg-Green text-White capitalize hover:bg-White hover:text-Green border-solid border-2 border-Green rounded-tr-large rounded-bl-large px-3 py-1 justify-self-center h-10"
        >{{ 'buy now' }}</UIButton
      >
    </UICard>
  </section>
</template>
<script setup>
import { moneyFormat } from '@/utils';

const { topThreeProducts } = defineProps(['topThreeProducts']);
</script>
