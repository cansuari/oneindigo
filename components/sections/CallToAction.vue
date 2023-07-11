<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
      >
        <svg
          viewBox="0 0 1024 1024"
          class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fill-opacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div
          class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
        >
          <p
            v-if="pin"
            class="text-base text-center lg:text-left font-semibold leading-7 text-indigo-500 mb-3"
          >
            {{ pin }}
          </p>
          <h2
            v-if="title"
            class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            <span v-html="title"></span>
          </h2>
          <p v-if="description" class="mt-6 text-lg leading-8 text-gray-300">
            {{ description }}
          </p>
          <div
            class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
          >
            <template v-if="buttons?.length > 0">
              <BaseButton
                v-for="button in buttons"
                :key="button.label"
                :external="button.external"
                :label="button.label"
                :url="button.url"
                :color="button.color"
                :textColor="button.textColor"
                :outline="button.outline"
                :rounded="button.rounded"
                :size="button.size"
                :icon="button.icon"
                :iconPosition="button.iconPosition"
                :iconName="button.iconName"
                :iconSize="button.iconSize"
                :id="button.id"
                :name="button.name"
              />
            </template>
          </div>
        </div>
        <div class="relative mt-16 h-80 lg:mt-8">
          <img
            v-if="image"
            class="absolute left-0 top-0 w-[60rem] max-w-none rounded-md bg-white/5 ring-1 ring-indigo-900"
            :src="image.url"
            :alt="image.alt"
            width="1824"
            height="1080"
          />
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
  buttons: { type: Array },
  image: { type: Object },
});
</script>
