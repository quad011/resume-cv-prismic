<script setup>
const appStore = useAppStore();
const { appData, fontsLoaded } = storeToRefs(appStore);

const scrollingStore = useScrollingStore();
const { navigationVisible, scrollingStarted } = storeToRefs(scrollingStore);

function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const scrollToSection = (hash) => {
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

onMounted(() => {});
</script>

<template>
  <div
    :class="[
      !navigationVisible ? '-translate-y-full' : 'translate-y-0',
      'transition-all duration-500 fixed w-full left-0 top-0 z-50 mix-blend-difference',
    ]"
  >
    <header
      :class="{ 'app-header--shrinked': scrollingStarted }"
      class="app-header px-4 lg:px-16 py-4 lg:py-10 fixed top-0 left-0 w-full flex justify-between text-white mix-blend-difference z-[100] pointer-events-none transition-all duration-500"
    >
      <!-- LOGO -->
      <nuxt-link
        to="/"
        @click.native="scrollToTop"
        class="cursor-pointer pointer-events-auto"
      >
        <img
          alt="logo"
          class="logo w-[10vw] lg:w-[5vw] object-contain"
          src="/assets/svg/logo.svg"
        />
      </nuxt-link>
      <!-- END :: LOGO -->

      <div class="flex pointer-events-auto">
        <nuxt-link
          to="/"
          @click.native="scrollToTop"
          class="mr-5 text-14 lg:text-base"
        >
          <span v-html="'Home'" class="link" />
        </nuxt-link>

        <nuxt-link
          v-for="item in appData?.data?.main_navigation"
          :to="item.link.url"
          @click.prevent="scrollToSection(item.link.url)"
          class="mr-5 last:mr-0 text-14 lg:text-base"
        >
          <span v-html="item.link.text" class="link" />
        </nuxt-link>
      </div>
      <!-- <nuxt-link :to="{ path: '/', hash: "" }">Home</nuxt-link> -->
    </header>
  </div>
</template>

<style lang="scss" scoped>
.app-header {
  &--shrinked {
    @apply px-5 py-5;
    .logo {
      @apply lg:w-[3vw];
    }
  }
}
</style>
