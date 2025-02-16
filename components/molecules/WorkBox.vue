<script setup>
import { ref } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  projectUrl: {
    type: Object,
  },
  techStack: {
    type: String,
  },
});
const openPopup = ref(false);

const playing = ref(false);
</script>

<template>
  <div
    class="m-work-box cursor-pointer"
    @click.native="openPopup = true"
    @mouseenter="playing = true"
    @mouseleave="playing = false"
  >
    <c-html-video
      v-if="videoUrl"
      :src="videoUrl"
      :autoplay="playing"
      :playing="playing"
      preload="metadata"
      :controls="false"
      :muted="true"
      :loop="true"
    />
    <h3 v-if="title" v-html="title" class="text-18 lg:text-24 mt-2 lg:mt-3" />
  </div>

  <!-- <teleport to="body">
    <TransitionGsap
      :leave_to="{ scale: 0.9, opacity: 0, duration: 0.4 }"
      :from="{ opacity: 0 }"
      :to="{
        opacity: 1,
        duration: 0.4,
        ease: 'Power1.easeOut',
      }"
      class="overflow-auto"
    >
      <Lightbox v-if="openPopup" @close="openPopup = false">
        <Popup
          :title="title"
          :videoUrl="videoUrl"
          :projectUrl="projectUrl"
          :techStack="techStack"
        />
      </Lightbox>
    </TransitionGsap>
  </teleport> -->
</template>

<style lang="scss" scoped>
.work-box {
}
</style>
