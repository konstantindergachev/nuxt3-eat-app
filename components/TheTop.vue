<template>
  <section class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 md:mt-20">
    <UICard v-for="prod in topThreeProducts" :key="prod.id">
      <UIImage :imgSrc="prod.img" :imgName="prod.name" className="flex justify-center" />
      <UITitle>{{ prod.name }}</UITitle>
      <UIBlackStar class="mx-auto"> &#9733; &#9733; &#9733; &#9733; &#9733; </UIBlackStar>
      <UISubtitle> {{ moneyFormat('en-US', 'USD', prod.price) }} kg </UISubtitle>
      <UIText>{{ prod.description }}</UIText>
      <UIButton className="btn btn-shape justify-self-center self-center">{{ 'buy now' }}</UIButton>
    </UICard>
  </section>
</template>
<script setup lang="ts">
import { useUtilities } from '@/composables/useUtilities';
const { topThreeProducts } = defineProps(['topThreeProducts']);

const { moneyFormat } = useUtilities();
</script>
