<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  linkUrl: {
    type: Object,
  },
});
onMounted(() => {});
</script>

<template>
  <div class="a-arrow-link overflow-hidden">
    <div class="flex">
      <PrismicLink :field="linkUrl" class="link">
        <div class="flex items-center overflow-hidden">
          <a-arrow
            class="arrow-left w-3 lg:w-6 h-3 lg:h-6 stroke-white -rotate-[90deg] relative left-0"
          />
          <p
            v-html="title"
            class="title text-base lg:text-30 relative left-0"
          />
          <a-arrow
            class="arrow-right w-3 lg:w-6 h-3 lg:h-6 ml-5 stroke-white -rotate-[90deg] relative left-0"
          />
        </div>
      </PrismicLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.a-arrow-link {
  .link {
    .arrow-left,
    .arrow-right,
    .title {
      transition: 0.4s;
    }
    .arrow-left {
      @apply -left-[2rem];
    }
    &:hover {
      .arrow-left {
        @apply left-[1rem];
      }
      .arrow-right {
        @apply left-[2rem];
      }
      .title {
        @apply left-[2rem];
      }
    }
  }
}
</style>
