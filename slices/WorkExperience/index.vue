<script setup>
const props = defineProps({
  slice: Object,
});
const { getPrimary } = useSlice(props.slice);
</script>

<template>
  <o-work-experience
    :title="getPrimary('title')"
    :items="getPrimary('items')"
  />
</template>
