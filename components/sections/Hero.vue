<template>
  <div class="bg-white">
    <div
      class="relative isolate px-6 py-14 lg:px-8 mx-auto max-w-7xl"
    >
      <div
        class="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:items-start lg:gap-y-10"
        :class="{ 'lg:grid-cols-2': imageEnabled }"
      >
        <div
          class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
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
        <div class="mx-auto max-w-2xl py-10 lg:py-16 self-center">
          <div class="text-center" :class="{ 'lg:text-left': imageEnabled }">
            <p
              v-if="pin"
              class="text-base font-semibold leading-7 text-indigo-600 mb-3"
            >
              {{ pin }}
            </p>
            <h1
              v-if="title"
              class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              <span v-html="title"></span>
            </h1>
            <p v-if="description" class="mt-6 text-xl leading-8 text-gray-700">
              {{ description }}
            </p>
            <div
              class="mt-10 flex items-center justify-center gap-x-6"
              :class="{ 'lg:justify-start': imageEnabled }"
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
              <template v-if="links?.length > 0">
                <BaseLink
                  v-for="link in links"
                  :key="link.label"
                  :external="link.external"
                  :label="link.label"
                  :url="link.url"
                  :color="link.color"
                  :icon="link.icon"
                  :iconPosition="link.iconPosition"
                  :iconName="link.iconName"
                  :iconSize="link.iconSize"
                  :id="link.id"
                  :name="link.name"
                />
              </template>
            </div>
          </div>
        </div>
        <div
          v-if="image && imageEnabled"
          class="mx-auto max-w-3xl py-10 lg:py-16 self-center"
        >
          <figure class="max-w-2xl relative">
            <img
              class="h-auto max-w-full rounded-3xl"
              :src="image.url"
              :alt="image.alt"
            />
          </figure>
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
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
  links: { type: Array },
  image: { type: Object },
  imageEnabled: Boolean,
  sectionEnabled: Boolean,
});
</script>
