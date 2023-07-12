<template>
  <div class="bg-indigo-900 my-24 md:my-36 py-20 md:py-36">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <p
        v-if="pin"
        class="text-base text-center font-semibold leading-7 text-indigo-600 mb-3"
      >
        {{ pin }}
      </p>
      <h2
        v-if="title"
        class="text-center text-4xl font-bold leading-8 text-white"
      >
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="mt-6 mx-auto max-w-xl text-center text-base leading-6 text-white/60"
      >
        {{ description }}
      </p>
      <div
        class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
      >
        <template v-if="images?.length > 0">
          <img
            v-for="image in images"
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            :src="image.url"
            :alt="image.alt"
            width="158"
            height="48"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pin: { type: String },
  title: { type: String },
  description: { type: String },
  images: { type: Array },
});
</script>
