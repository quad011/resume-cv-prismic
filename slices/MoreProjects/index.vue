<script setup>
const props = defineProps({
  slice: Object,
});
const { getPrimary, items } = useSlice(props.slice);
</script>

<template>
  <o-more-projects :title="getPrimary('title')" :items="getPrimary('items')" />
</template>
