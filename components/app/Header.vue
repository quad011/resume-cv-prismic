<script setup>
const appStore = useAppStore();
const { appData, fontsLoaded, isMenuOpen } = storeToRefs(appStore);

const scrollingStore = useScrollingStore();
const { navigationVisible, scrollingStarted } = storeToRefs(scrollingStore);

const { isMobileOrTablet, isDesktop } = useDevice();

function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });

  // Remove the hash from the URL after scrolling to the top
  setTimeout(() => {
    history.pushState(null, null, window.location.pathname);
  }, 500); // Delay to allow smooth scrolling
}

const scrollToSection = hash => {
  const element = document.querySelector(hash);
  if (element) {
    const offset = 100;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });

    history.pushState(null, null, hash);
  }
};

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      history.pushState(null, null, window.location.pathname);
    }
  });
});
</script>

<template>
  <div
    :class="[
      !navigationVisible ? '-translate-y-full' : 'translate-y-0',
      'transition-all duration-500 fixed w-full left-0 top-0 z-50 mix-blend-difference',
    ]"
  >
    <header
      :class="{
        'app-header--shrink': scrollingStarted,
      }"
      class="app-header px-4 lg:px-16 py-4 lg:py-10 fixed top-0 left-0 w-full flex items-start justify-between text-white mix-blend-difference z-[100] pointer-events-none transition-all duration-500"
    >
      <!-- LOGO -->
      <nuxt-link
        to="/"
        @click.native="scrollToTop"
        class="cursor-pointer pointer-events-auto"
        @mouseenter="setCursor('hovered')"
        @mouseleave="setCursor('default')"
      >
        <img
          alt="logo"
          class="logo w-[12vw] sm:w-[10vw] lg:w-[5vw] object-contain transition-all duration-500"
          src="/assets/svg/logo.svg"
        />
      </nuxt-link>
      <!-- END :: LOGO -->

      <div class="flex items-center">
        <div class="hidden lg:flex pointer-events-auto">
          <nuxt-link
            to="/"
            @click.native="scrollToTop"
            class="mr-5 text-14 lg:text-base"
            @mouseenter="setCursor('hovered')"
            @mouseleave="setCursor('default')"
          >
            <span v-html="'Home'" class="link" />
          </nuxt-link>

          <nuxt-link
            v-for="item in appData?.data?.main_navigation"
            :to="item.link.url"
            @click.prevent="scrollToSection(item.link.url)"
            @mouseenter="setCursor('hovered')"
            @mouseleave="setCursor('default')"
            class="mr-5 last:mr-0 text-14 lg:text-base hover-target"
          >
            <span v-html="item.link.text" class="link" />
          </nuxt-link>
        </div>

        <a-button
          @mouseenter="setCursor('hovered')"
          @mouseleave="setCursor('default')"
          :title="appData?.data?.resume?.text"
          :linkUrl="appData?.data?.resume?.url"
          class="lg:ml-5"
        />

        <div class="flex justify-end lg:hidden ml-5">
          <app-hamburger
            class="flex justify-end mr-2 pointer-events-auto"
            :isMenuOpen="isMenuOpen"
            @click="isMenuOpen = !isMenuOpen"
            @keydown.esc="isMenuOpen = false"
          />
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.app-header {
  &--shrinked {
    @screen lg {
      @apply px-5 py-5;
      .logo {
        @apply lg:w-[3vw];
      }
    }
  }
}
</style>
