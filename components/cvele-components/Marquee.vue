<script setup>
import gsap from "gsap";

const props = defineProps({
  items: {
    type: Object,
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
  duration: {
    type: Number,
  },
});

const init = () => {
  const marquee = document.querySelectorAll(".marquee");

  if (marquee.length === 0) return;

  marquee.forEach((item) => {
    const marqueeInner = item.querySelector(".marquee__inner");
    const marqueeContent = marqueeInner.querySelector(".marquee__content");

    if (!marqueeContent) return;

    // Duration (convert to number)
    const duration = Number(item.getAttribute("data-marquee-duration")) || 30;

    // Marquee animation
    const marqueeContentAll =
      marqueeInner.querySelectorAll(".marquee__content");

    marqueeContentAll.forEach((element) => {
      gsap.to(element, {
        x: "-101%",
        repeat: -1,
        duration: duration,
        ease: "linear",
      });
    });
  });
};

onMounted(() => {
  init();
});
</script>

<template>
  <div class="marquee overflow-hidden" :data-marquee-duration="duration">
    <div class="marquee__inner flex">
      <div
        v-if="variation === 'logoMarquee'"
        class="marquee__content flex items-center"
      >
        <c-picture
          v-for="(item, index) in items"
          :key="index"
          class="w-auto h-[12vw] lg:h-[6vw] object-contain lg:mx-10"
          innerClass=""
          :useOriginalRatio="true"
          :image="item.image"
          sizes="sm:375px md:375px lg:480px xl:480px"
          :alt="item?.image?.alt || 'Skills'"
        />
      </div>

      <div
        v-if="variation === 'default'"
        class="marquee__content text-[8.46vw] whitespace-nowrap"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Styles remain unchanged
</style>
