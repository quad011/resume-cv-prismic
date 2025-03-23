<script setup>
import { PrismicRichText } from '#components';

const props = defineProps({
  items: {
    type: Object,
  },
  caption: {
    type: Array,
  },
});
</script>

<template>
  <div
    class="page-header h-[80vw] sm:h-[56.25vw] max-h-screen flex flex-col justify-end items-center relative overflow-hidden"
  >
    <c-animated-element :fromY="-50" :toY="0">
      <c-scrolling-element
        fromY="0"
        :toY="'-100vw'"
        startPosition="0"
        endPosition="top top"
        :fromScale="1"
        :toScale="0"
        class="text-black text-20 lg:text-40 whitespace-nowrap !font-bold uppercase mb-10"
        style="will-change: transform, opacity"
      >
        <PrismicRichText :field="caption" wrapper="div" />
      </c-scrolling-element>
    </c-animated-element>

    <div v-for="(item, index) in items" :key="index">
      <c-scrolling-element
        :fromX="0"
        :toX="index % 2 ? '-100vw' : '100vw'"
        startPosition="0"
        endPosition="bottom top"
      >
        <h1
          class="text-black flex items-center text-[10.5vw] whitespace-nowrap font-bold uppercase leading-[.9]"
        >
          <c-animated-element :fromY="50" :toY="0" :delay="index / 10">
            <span v-html="item.title" />
          </c-animated-element>
        </h1>
      </c-scrolling-element>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
