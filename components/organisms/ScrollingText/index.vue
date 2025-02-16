<script setup>
const props = defineProps({
  text: {
    type: String,
  },
});
</script>

<template>
  <div class="scrolling-text flex items-center overflow-hidden my-10 lg:my-20">
    <c-scrolling-element
      class="flex"
      :fromX="0"
      :toX="'-20%'"
      startPosition="top bottom"
      endPosition="bottom top"
      :speed="0.5"
    >
      <h2 class="flex items-center">
        <span v-for="i in 4">
          <span
            v-html="text"
            class="text-[8.46vw] font-bold uppercase whitespace-nowrap"
          />
        </span>
      </h2>
    </c-scrolling-element>
  </div>
</template>

<style lang="scss" scoped></style>
