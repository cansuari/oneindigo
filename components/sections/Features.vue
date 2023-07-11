<template>
  <div
    class="bg-white py-24 sm:py-32 relative isolate border-t border-indigo-50"
  >
    <div
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        class="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-5/3 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(50%-50rem)] sm:w-[80.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <p
          v-if="pin"
          class="text-base text-center font-semibold leading-7 text-indigo-600 mb-3"
        >
          {{ pin }}
        </p>
        <h2
          v-if="title"
          class="text-center text-4xl font-bold leading-8 text-gray-900"
        >
          <span v-html="title"></span>
        </h2>
        <p
          v-if="description"
          class="text-center mt-6 text-lg leading-8 text-gray-700"
        >
          {{ description }}
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16"
        >
          <div
            v-for="feature in content"
            :key="feature.name"
            class="relative sm:pl-16 flex flex-col items-center text-center lg:text-left lg:items-start"
          >
            <div
              class="flex h-16 w-16 mb-5 items-center justify-center rounded-lg bg-indigo-600"
            >
              <!-- <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" /> -->
              <Icon :name="feature.icon" size="40" color="white" />
            </div>
            <div class="text-base font-semibold leading-7 text-gray-900">
              {{ feature.name }}
            </div>
            <div class="mt-2 text-base leading-7 text-gray-600">
              {{ feature.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pin: { type: String },
  title: { type: String },
  description: { type: String },
  content: { type: Array },
});
</script>
