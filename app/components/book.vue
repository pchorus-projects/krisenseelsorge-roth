<script setup lang="ts">
const props = defineProps<{ imageUrl: string; title: string }>();
</script>

<template>
  <div class="book-image">
    <NuxtImg :src="props.imageUrl" :alt="props.title" width="320"></NuxtImg>
  </div>
</template>

<style scoped lang="scss">
.book-image {
  margin-bottom: var(--space-s);
}
</style>
