<script setup>
import animationConfig from './animationConfig';
import { PrismicRichText } from '@prismicio/vue';
const props = defineProps({
  title: {
    type: String,
  },
  caption: {
    type: String,
  },
  text: {
    type: Array,
  },
  items: {
    type: Object,
  },
});

const itemsArray = Object.values(props.items);
itemsArray.splice(1, 0, {
  type: 'text',
  caption: props.caption,
  text: props.text,
});

onMounted(() => {});
</script>

<template>
  <div
    id="projects"
    class="works px-4 lg:px-16 my-10 lg:my-16 relative overflow-hidden"
  >
    <!-- <h2 v-html="caption" class="text-32 lg:text-40 mb-4 lg:mb-10" /> -->
    <div class="flex flex-wrap -mx-4">
      <div
        v-for="(item, index) in itemsArray"
        :key="index"
        class="px-4 w-full sm:w-1/2 xl:w-1/3 mb-10 lg:mb-20 lg:[&:nth-last-child(-n+3)]:mb-0 flex flex-col h-full"
      >
        <c-animated-element
          :fromX="animationConfig[index % 3].fromX"
          :fromY="animationConfig[index % 3].fromY"
        >
          <m-work-box
            :title="item?.video?.text"
            :videoUrl="item?.video?.url"
            :projectUrl="item?.project_url"
            :techStack="item?.tech_stack"
            :videoPoster="item?.video_poster"
          />
        </c-animated-element>

        <c-animated-element
          :fromY="animationConfig[index % 3].fromY"
          v-if="item.caption"
          class="h-full flex flex-col"
        >
          <h2
            v-html="item?.caption"
            class="text-24 lg:text-32 uppercase mb-5 sm:mb-3 lg:mb-7"
          />

          <div v-if="item.text" class="text-16 sm:text-14 xl:text-base content">
            <PrismicRichText :field="item?.text" wrapper="div" />
          </div>
        </c-animated-element>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
