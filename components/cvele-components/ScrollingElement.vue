<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  fromX: {
    type: [String, Number],
    default: 0,
  },
  toX: {
    type: [String, Number],
    default: 0,
  },
  fromY: {
    type: [String, Number],
    default: 0,
  },
  toY: {
    type: [String, Number],
    default: 0,
  },
  startPosition: {
    type: String,
  },
  endPosition: {
    type: String,
  },
  speed: {
    type: Number,
    default: 0.1,
  },
  transformOrigin: {
    type: String,
  },
  fromScale: {
    type: Number,
    default: 1,
  },
  toScale: {
    type: Number,
    default: 1,
  },
  pin: {
    type: Boolean,
    default: false,
  },
  delay: {
    type: Number,
    default: 0,
  },
});

gsap.registerPlugin(ScrollTrigger);

const main = ref(null);
let ctx = null;

onMounted(() => {
  ctx = gsap.context((self) => {
    const items = self.selector(".item");

    items.forEach((item) => {
      // Reset all values
      gsap.set(item, {
        x: "0px",
        y: "0px",
        clearProps: "all",
      });

      gsap.fromTo(
        item,
        {
          x: props.fromX,
          y: props.fromY,
          scale: props.fromScale,
        },
        {
          x: props.toX,
          y: props.toY,
          ease: "none",
          scale: props.toScale,
          immediateRender: true,
          delay: props.delay,
          scrollTrigger: {
            trigger: item,
            start: props.startPosition,
            end: props.endPosition,
            scrub: props.speed,
            transformOrigin: props.transformOrigin,
            // markers: true,
            pin: props.pin,
          },
        }
      );
    });
  }, main.value);
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>

<template>
  <div class="scrolling-element" ref="main">
    <div class="item1">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.scrolling-element {
  position: relative;
  .item {
  }
}
</style>
