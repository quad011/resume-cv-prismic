<script setup>
import { PrismicRichText } from '#components';

const props = defineProps({
  title: {
    type: String,
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
        fromX="0"
        :toX="'100vw'"
        startPosition="0"
        endPosition="top top"
        :fromScale="1"
        :toScale="0"
        class="text-black text-20 lg:text-40 whitespace-nowrap !font-bold uppercase"
        style="will-change: transform, opacity"
      >
        <PrismicRichText :field="caption" />
      </c-scrolling-element>
    </c-animated-element>

    <c-animated-element :fromY="50" :toY="0">
      <c-scrolling-element
        :fromX="0"
        :toX="'-100vw'"
        startPosition="0"
        endPosition="bottom top"
      >
        <h1
          v-html="title"
          class="text-black text-[10.5vw] whitespace-nowrap font-bold uppercase"
        ></h1>
      </c-scrolling-element>
    </c-animated-element>
  </div>
</template>

<style lang="scss" scoped></style>
