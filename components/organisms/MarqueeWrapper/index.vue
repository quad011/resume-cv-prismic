<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  reversed: {
    type: Boolean,
  },
  variation: {
    type: String,
  },
  items: {
    type: Object,
  },
});
</script>

<template>
  <div
    :id="items ? 'skills' : ''"
    class="marquee-wrapper flex flex-col relative overflow-hidden my-10 lg:my-20"
  >
    <h2
      v-if="title"
      v-html="title"
      class="text-32 lg:text-40 px-4 lg:px-16 mb-5 lg:mb-10"
    />

    <!-- MARQUEE -->
    <c-marquee
      :duration="items ? 20 : 50"
      :items="items"
      :text="text"
      :reversed="reversed"
      :variation="variation"
      innerClass="text-[8.46vw]"
    />
    <!-- MARQUEE -->
  </div>
</template>

<style lang="scss" scoped></style>
