<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <div
    class="page-header h-[80vw] sm:h-[56.25vw] max-h-screen flex flex-col justify-end items-center relative overflow-hidden"
  >
    <c-animated-element :fromY="-50" :toY="0">
      <c-scrolling-element
        fromY="0"
        :toY="'-20vw'"
        startPosition="bottom bottom"
        endPosition="bottom top"
        :fromScale="1"
        :toScale="0"
      >
        <p
          v-html="`Hi, I am`"
          class="text-black text-40 whitespace-nowrap font-bold uppercase"
        ></p>
      </c-scrolling-element>
    </c-animated-element>

    <c-animated-element :fromY="50" :toY="0">
      <c-scrolling-element
        :fromY="0"
        :toY="'-30vw'"
        startPosition="bottom bottom"
        endPosition="bottom top"
        :delay="10"
      >
        <h1
          v-html="title"
          class="text-black text-[10.5vw] whitespace-nowrap font-bold uppercase"
        ></h1>
      </c-scrolling-element>
    </c-animated-element>
  </div>
</template>

<style lang="scss" scoped></style>
