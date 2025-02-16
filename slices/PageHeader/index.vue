<script setup>
const props = defineProps({
  slice: Object,
});
const { getPrimary, items } = useSlice(props.slice);
</script>

<template>
  <o-page-header :title="getPrimary('title')" />
</template>
