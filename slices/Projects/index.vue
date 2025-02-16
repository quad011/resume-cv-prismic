<script setup>
const props = defineProps({
  slice: Object,
});
const { getPrimary, items } = useSlice(props.slice);

console.log("");
</script>

<template>
  <o-projects
    :title="getPrimary('title')"
    :caption="getPrimary('caption')"
    :text="getPrimary('text')"
    :items="getPrimary('items')"
  />
</template>
