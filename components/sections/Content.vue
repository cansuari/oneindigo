<template>
  <div v-if="content" class="bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-4xl text-center rich-text">
      <VueMarkdown :source="content" />
    </div>
  </div>
</template>

<script setup>
import VueMarkdown from "vue-markdown-render";

const props = defineProps({
  content: { type: String },
});
</script>
