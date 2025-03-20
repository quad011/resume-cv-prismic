<script setup>
import { useAppStore } from '@/stores/app';
import appConfig from '~/config/app';

const appStore = useAppStore();

// const route = useRoute();

const pageTitle = ref('Default Title');

const showEl = ref(false);

const onScroll = () => {
  showEl.value = window.scrollY > 100;
  return {
    showEl,
  };
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});

function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
}

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: `${appConfig.site_name} - ${pageTitle.value}`,
});

onMounted(async () => {
  // Fetch globally on app load
  await appStore.fetchAppData();
});
</script>

<template>
  <div class="app h-full w-full">
    <NuxtLayout class="w-full h-full bg-white2">
      <NuxtPage class="w-full h-full" />
    </NuxtLayout>

    <a-cursor />

    <div
      @mouseenter="setCursor('hovered')"
      @mouseleave="setCursor('default')"
      class="fixed right-3 lg:right-5 bottom-16 lg:bottom-5 z-10 bg-white rounded-full transition-opacity duration-500 cursor-pointer mix-blend-difference"
      @click.native="scrollToTop"
      :class="showEl ? 'opacity-100' : 'opacity-0'"
    >
      <a-arrow
        v-if="showEl"
        class="w-10 lg:w-14 h-10 lg:h-14 p-3 rotate-180 stroke-black"
      />
    </div>
  </div>
</template>
