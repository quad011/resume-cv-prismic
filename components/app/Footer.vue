<script setup>
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";

const appStore = useAppStore();
const { appData } = storeToRefs(appStore);

onMounted(() => {
  //   console.log("appStoreeeeee", appData);
});
</script>

<template>
  <footer class="app-footer overflow-hidden uppercase border-t border-black">
    <div class="px-4 py-5 lg:p-16 flex items-center justify-between">
      <div class="flex items-center justify-between w-full">
        <p class="text-14 lg:text-base" v-html="appData?.data?.footer_text" />
        <a
          :href="appData?.data?.phone?.url"
          class="text-14 lg:text-base link reversed"
          >{{ appData?.data?.phone?.text }}</a
        >
        <a
          :href="appData?.data?.mail?.url"
          class="text-14 lg:text-base link reversed"
          >{{ appData?.data?.mail?.text }}</a
        >
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.app-footer {
}
</style>
