<script setup>
const props = defineProps({
  slice: Object,
});
const { getPrimary, items } = useSlice(props.slice);
</script>

<template>
  <o-page-header
    :items="getPrimary('items')"
    :caption="getPrimary('caption')"
  />
</template>
