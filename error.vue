<template>
  <div
    class="relative font-sans bg-gray-900 h-screen text-center flex items-center justify-center px-5"
  >
    <div>
      <Icon
        name="tabler:face-id-error"
        class="text-indigo-600 mb-8 md:mb-16"
        size="124"
      />
      <p
        class="text-[160px] sm:text-[240px] font-thin bg-clip-text text-transparent bg-gradient-to-b from-indigo-700 leading-[10rem]"
      >
        {{ error.statusCode }}
      </p>
      <h1 class="text-3xl font-light tracking-tight text-indigo-300">
        {{ error.message }}
      </h1>
      <div class="mt-20 flex items-center justify-center gap-x-6">
        <a
          href="/"
          class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Go back home</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: Object,
});
</script>
