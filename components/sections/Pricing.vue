<template>
  <div class="bg-white my-24 md:my-36 pb-24 lg:pb-0">
    <div class="mx-auto isolate overflow-hidden bg-gray-900">
      <div
        class="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8"
      >
        <div class="mx-auto max-w-2xl">
          <p
            v-if="pin"
            class="text-base text-center font-semibold leading-7 text-indigo-600 mb-3"
          >
            {{ pin }}
          </p>
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span v-html="title"></span>
          </h2>
          <p class="mt-6 text-lg leading-8 text-white/60">
            {{ description }}
          </p>
        </div>
        <div class="relative mt-6">
          <svg
            viewBox="0 0 1208 1024"
            class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx="604"
              cy="512"
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
              rx="604"
              ry="512"
            />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stop-color="#7775D6" />
                <stop offset="1" stop-color="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div v-if="items?.length > 0" class="flow-root bg-white py-14">
        <div class="-mt-80">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl"
              :class="`lg:grid-cols-${items.length}`"
            >
              <div
                v-for="item in items"
                :key="item.name"
                class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 sm:p-10"
                :class="[
                  item.mostPopular
                    ? 'ring-indigo-500/50 lg:scale-105 shadow-lg shadow-indigo-600/30'
                    : 'ring-gray-900/10',
                ]"
              >
                <div>
                  <h3 class="text-base font-semibold leading-7 text-indigo-600">
                    {{ item.name }}
                  </h3>
                  <div class="mt-4 flex items-baseline gap-x-2">
                    <span
                      class="text-5xl font-bold tracking-tight text-gray-900"
                      >{{ item.price }}</span
                    >
                    <span class="text-base font-normal leading-7 text-gray-00"
                      >/life-time</span
                    >
                  </div>
                  <p class="mt-6 text-lg leading-7 text-gray-600">
                    {{ item.description }}
                  </p>
                  <ul
                    role="list"
                    class="mt-10 space-y-4 text-sm leading-6 text-gray-600"
                  >
                    <li
                      v-for="feature in item.features"
                      :key="feature"
                      class="flex gap-x-3"
                    >
                      <Icon
                        name="mdi:check"
                        size="24"
                        class="text-indigo-600 mr-2"
                      />
                      {{ feature.label }}
                    </li>
                  </ul>
                </div>
                <a
                  :href="item.url"
                  :aria-describedby="item.name"
                  class="mt-8 block rounded-lg px-3.5 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all hover:-translate-y-1"
                  :class="[
                    item.mostPopular
                      ? ' bg-indigo-600 text-white hover:bg-indigo-600 focus-visible:outline-indigo-600'
                      : ' border border-indigo-600 bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white focus-visible:outline-indigo-600',
                  ]"
                  >Get started today</a
                >
              </div>
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
  items: { type: Array },
});
</script>
