<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  period: {
    type: String,
  },
  links: {
    type: Object,
  },
  position: {
    type: String,
  },
  text: {
    type: Array,
  },
});
</script>

<template>
  <div class="m-box">
    <div class="text-18 lg:text-24">
      <h3 v-if="title" v-html="title" class="mb-3 font-bold" />
      <h3 v-if="period" v-html="period" class="mb-3" />
      <h3 v-if="position" v-html="position" class="mb-3 font-bold" />

      <div
        v-if="links.length > 1"
        v-for="link in links"
        class="flex flex-col mb-2 last:mb-0"
      >
        <div class="flex">
          <PrismicLink :field="link.link" class="link-reversed" />
        </div>
      </div>

      <div class="text-16 lg:text-base mt-5">
        <PrismicRichText :field="text" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.m-box {
}
</style>
