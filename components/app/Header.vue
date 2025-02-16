<script setup>
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";

const appStore = useAppStore();
const { appData } = storeToRefs(appStore);

function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

onMounted(() => {});
</script>

<template>
  <header
    class="app-header px-4 lg:px-16 py-4 lg:py-10 fixed top-0 left-0 w-full flex justify-between text-white mix-blend-difference z-[100]"
  >
    <!-- LOGO -->
    <nuxt-link to="/" @click.native="scrollToTop" class="cursor-pointer">
      <img
        alt="logo"
        class="logo w-[10vw] lg:w-[5vw] object-contain"
        src="/assets/svg/logo.svg"
      />
    </nuxt-link>
    <!-- END :: LOGO -->

    <div class="flex">
      <nuxt-link
        to="/"
        @click.native="scrollToTop"
        class="mr-5 text-14 lg:text-base"
      >
        <span v-html="'Home'" class="link" />
      </nuxt-link>

      <nuxt-link
        v-for="item in appData?.data?.main_navigation"
        :to="{ hash: `${item.link.url}` }"
        class="mr-5 last:mr-0 text-14 lg:text-base"
      >
        <span v-html="item.link.text" class="link" />
      </nuxt-link>
    </div>
    <!-- <nuxt-link :to="{ path: '/', hash: "" }">Home</nuxt-link> -->
  </header>
</template>
