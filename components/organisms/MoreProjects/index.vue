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
  <div
    class="o-more-projects px-4 lg:px-16 py-4 md:py-20 bg-black text-white overflow-hidden"
  >
    <c-animated-element :fromY="50" :toY="0">
      <h2 v-html="title" class="text-32 lg:text-40 mb-5 md:mb-10" />
    </c-animated-element>

    <div class="flex flex-wrap -mx-3 lg:-mx-6">
      <c-animated-element
        :fromY="50"
        :toY="0"
        :delay="index / 10"
        v-for="(item, index) in items"
        :key="index"
        class="w-1/2 md:w-1/3 mb-5 lg:mb-14 md:[&:nth-last-child(-n+3)]:mb-0"
      >
        <a-arrow-link
          :linkUrl="item.link"
          :title="item.link.text"
          class="text-40"
          @mouseenter="setCursor('hovered')"
          @mouseleave="setCursor('default')"
        >
          <div
            v-if="item.image && item.image.url"
            class="image pointer-events-none absolute left-0 translate-x-[20%] top-0 -translate-y-[20%] w-auto h-[5em] mix-blend-difference"
          >
            <c-mouse-parallax class="w-full h-full">
              <c-picture
                class="w-full h-full"
                innerClass=""
                :useOriginalRatio="true"
                :image="item.image"
                sizes="sm:375px md:375px lg:480px xl:480px"
                :alt="item?.image?.alt || 'DC Resume'"
              />
            </c-mouse-parallax>
          </div>
        </a-arrow-link>
      </c-animated-element>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
