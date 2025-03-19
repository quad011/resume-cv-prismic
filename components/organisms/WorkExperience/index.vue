<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const props = defineProps({
  title: {
    type: String,
  },
  items: {
    type: Object,
  },
});

const swiper = ref(0);
const currentIndex = ref(0);

const onSwiper = swiperSlider => {
  swiper.value = swiperSlider;
};
const next = () => {
  swiper.value.slideNext();
};
const prev = () => {
  swiper.value.slidePrev();
};
const onSlideChange = index => {
  currentIndex.value = index.activeIndex;
};

onMounted(() => {});
</script>

<template>
  <div id="experience" class="works my-10 lg:my-16 relative overflow-hidden">
    <div class="flex justify-between mb-5 lg:mb-10 px-4 lg:px-16">
      <!-- TITLE -->
      <c-animated-element :fromY="50" :toY="0">
        <h2 v-html="title" class="text-32 lg:text-40 mb-4 lg:mb-10" />
      </c-animated-element>
      <!-- END :: TITLE -->

      <!-- NAVIGATION -->
      <c-animated-element :fromY="50" :toY="0" :delay="0.1">
        <div class="flex items-center">
          <div
            @click="prev"
            class="arrow w-[1.5rem] lg:w-[2.5rem] prev cursor-pointer"
          >
            <a-arrow
              class="w-10 lg:w-14 h-10 lg:h-14 p-3 rotate-90 stroke-black"
            />
          </div>

          <div
            @click="next"
            class="arrow w-[1.5rem] lg:w-[2.5rem] next cursor-pointer"
          >
            <a-arrow
              class="w-10 lg:w-14 h-10 lg:h-14 p-3 -rotate-90 stroke-black"
            />
          </div>
        </div>
      </c-animated-element>
      <!-- END :: NAVIGATION -->
    </div>

    <!-- SWIPER -->
    <Swiper
      @slideChange="onSlideChange"
      @swiper="onSwiper"
      class="swiper-wrapper !h-auto w-full !pl-4 lg:!pl-16"
      :speed="700"
      :grab-cursor="true"
      :loop="true"
      :delay="0.1"
      :breakpoints="{
        slidesPerView: 1,
        spaceBetween: 10,
        1024: { slidesPerView: 2.3, spaceBetween: 50 },
      }"
    >
      <SwiperSlide
        v-for="(item, index) in items"
        :key="index"
        class="flex h-full pr-5 lg:pr-0"
      >
        <c-animated-element :fromY="50" :toY="0" :delay="index * 0.2">
          <m-box
            :title="item.item.data.title"
            :period="item.item.data.period"
            :links="item.item.data.links"
            :position="item.item.data.position"
            :text="item.item.data.text"
          />
        </c-animated-element>
      </SwiperSlide>
    </Swiper>
    <!-- END :: SWIPER -->
  </div>
</template>

<style lang="scss" scoped></style>
