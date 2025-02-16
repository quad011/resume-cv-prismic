<script setup>
import { useAppStore } from "@/stores/app";
import { useRoute } from "vue-router";
import appConfig from "~/config/app";

const appStore = useAppStore();

const route = useRoute();

const pageTitle = ref("Default Title");

useHead({
  htmlAttrs: {
    lang: "en",
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
  </div>
</template>
