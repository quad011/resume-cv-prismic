<script setup>
const introVisible = ref(true);

onMounted(() => {});
</script>

<template>
  <div class="layout base">
    <!-- PROGRESS BAR -->
    <progress-bar />
    <!-- END :: PROGRESS BAR -->

    <!-- APP HEADER -->
    <app-header />
    <!-- END :: APP HEADER -->

    <!-- PAGE CONTENT -->
    <slot />
    <!-- END :: PAGE CONTENT -->

    <!-- INTRO -->
    <!-- <t-gsap
      :notAbsolute="true"
      :from="{}"
      :leave_to="{
        // clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        opacity: 0,
        duration: 1.2,
        ease: 'Power2.easeOut',
      }"
    >
      <intro v-model:introVisible="introVisible" v-if="introVisible" />
    </t-gsap> -->
    <!-- END :: INTRO -->
  </div>
</template>
