<template>
  <TheBanner
    :title="banner?.title"
    :subtitle="banner?.subtitle"
    :description="banner?.description"
    :img="banner?.img"
  />
  <Recommendation
    :title="recommendation?.title"
    :titleImg="recommendation?.titleImg"
    :description="recommendation?.description"
    :img="recommendation?.img"
    :characteristic="recommendation?.characteristic"
  />
  <Delivery :delivery="delivery" />
  <TheTop :topThreeProducts="topThreeProducts" />
  <Newsletter :title="newsletter?.title" :description="newsletter?.description" />
</template>
<script setup lang="ts">
import { IBanner } from '@/interfaces/thebanner';
import { IFruit } from '@/interfaces/fruits';
import { IRecommendation } from '@/interfaces/recommendation';
import { IDelivery } from '@/interfaces/delivery';
import { INewsletter } from '@/interfaces/newsletter';

const { data: banner } = await useFetch<IBanner>('/api/banner');
const { data: recommendation } = await useFetch<IRecommendation>('/api/recommendation');
const { data: delivery } = await useFetch<IDelivery>('/api/delivery');
const { data: newsletter } = await useFetch<INewsletter>('/api/newsletter');

const { data } = await useFetch<IFruit[]>('/api/fruits/top');
const topThreeProducts = data.value?.filter((product, idx) => idx <= 2 && product);
</script>
