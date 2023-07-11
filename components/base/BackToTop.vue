<template>
  <div id="back-to-top" class="flex items-center justify-center mb-10">
    <button
      class="bg-gray-900 hover:bg-indigo-800 transition-all rounded-full p-4"
      @click="scrollToTop"
    >
      <Icon name="ic:baseline-arrow-upward" size="24" color="white" />
    </button>
  </div>
</template>

<script setup>
const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
</script>
