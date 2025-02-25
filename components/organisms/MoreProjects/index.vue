<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  items: {
    type: Object,
  },
});
</script>

<template>
  <div class="o-more-projects px-4 lg:px-16 py-4 md:py-20 bg-black text-white">
    <h2 v-html="title" class="text-32 lg:text-40 mb-5 md:mb-10" />
    <div class="flex flex-wrap -mx-3 lg:-mx-6">
      <a-arrow-link
        v-for="(link, index) in items"
        :key="index"
        :linkUrl="link.link"
        :title="link.link.text"
        class="w-1/2 md:w-1/3 text-40 mb-5 lg:mb-14 md:[&:nth-last-child(-n+3)]:mb-0"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
