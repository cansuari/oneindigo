<template>
  <div class="bg-gray-900 px-6 py-10 sm:py-20 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        {{ title }}
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String },
  description: { type: String },
});
</script>
