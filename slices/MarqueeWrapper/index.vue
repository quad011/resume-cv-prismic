<script setup>
const props = defineProps({
  slice: Object,
});
const { getPrimary } = useSlice(props.slice);
</script>

<template>
  <o-marquee-wrapper
    :variation="slice.variation"
    :title="getPrimary('title')"
    :text="getPrimary('text')"
    :items="getPrimary('items')"
    :reversed="getPrimary('reversed')"
  />
</template>
