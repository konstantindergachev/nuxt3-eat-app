<template>
  <div class="flex justify-center max-w-screen-xl">
    <div class="relative overflow-hidden w-full h-[50rem]">
      <AppCarouselIndicators
        v-if="indicators"
        :total="slidesTotal"
        :currentIndex="currentSlide"
        @switch="switchSlide($event)"
      />
      <div
        class="absolute top-0 left-0 right-0 bottom-0"
        v-for="(slide, index) in slides"
        :key="`item-${index}`"
        @mouseover="stopSlideTimer"
        @mouseleave="startSlideTimer"
      >
        <transition :name="transitionEffect">
          <section
            v-show="currentSlide === index"
            class="container flex flex-col-reverse justify-center md:flex-row lg:justify-between lg:space-x-10 mt-14 md:mt-32"
          >
            <div class="w-full text-left lg:w-6/12 space-y-6 pt-14 md:pt-32">
              <h1 class="uppercase text-Green font-bold leading-14 text-3xl lg:text-6xl">
                {{ slide.title }}
              </h1>
              <p class="text-Black opacity-70">{{ slide.description }}</p>
              <h4 class="uppercase text-xs">Ahmed Hridoy</h4>
              <h4 class="uppercase text-xs">{{ slide.created_at.split('.')[0] }}</h4>
              <UIBlackStar> &#9733; &#9733; &#9733; &#9733; &#9733; </UIBlackStar>
            </div>
            <div class="w-full lg:w-6/12 flex justify-center items-center">
              <img :src="slide.url" :alt="slide.title" class="h-96" />
            </div>
          </section>
        </transition>
      </div>

      <AppCarouselControls @prev="prev" @next="next" v-if="controls" />
    </div>
  </div>
</template>
<script setup>
const emits = defineEmits(['mouseenter', 'mouseout']);

const { slides, interval } = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  controls: {
    type: Boolean,
    default: false,
  },
  indicators: {
    type: Boolean,
    default: false,
  },
  interval: {
    type: Number,
    default: 5000,
  },
});

const currentSlide = ref(0);
const slideInterval = ref(null);
const direction = ref('right');

const transitionEffect = computed(() => {
  return direction.value === 'right' ? 'slide-out' : 'slide-in';
});
const slidesTotal = computed(() => slides.length);

const setCurrentSlide = (idx) => {
  currentSlide.value = idx;
};
const setDirection = (name) => {
  direction.value = name;
};

const prev = (step = -1) => {
  const index = currentSlide.value > 0 ? currentSlide.value + step : slides.length - 1;

  setCurrentSlide(index);
  startSlideTimer();
  setDirection('left');
};
const _next = (step = 1) => {
  const index = currentSlide.value < slides.length - 1 ? currentSlide.value + step : 0;

  setCurrentSlide(index);
  setDirection('right');
};
const next = (step = 1) => {
  _next(step);
  startSlideTimer();
};

const startSlideTimer = () => {
  stopSlideTimer();
  slideInterval.value = setInterval(() => {
    _next();
  }, interval);
};
const stopSlideTimer = () => {
  clearInterval(slideInterval.value);
};

const switchSlide = (index) => {
  const step = index - currentSlide.value;
  if (step > 0) {
    next(step);
  } else {
    prev(step);
  }
};

onMounted(() => {
  startSlideTimer();
});
onBeforeUnmount(() => {
  stopSlideTimer();
});
</script>
<style scoped>
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}
</style>
