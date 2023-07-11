<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2
          class="text-center text-3xl font-bold leading-10 tracking-tight text-gray-900"
        >
          {{ title }}
        </h2>
        <p
          v-if="description"
          class="text-center mt-6 text-lg leading-8 text-gray-700"
        >
          {{ description }}
        </p>
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <Disclosure
            as="div"
            v-for="item in items"
            :key="item.title"
            class="pt-6"
            v-slot="{ open }"
          >
            <dt>
              <DisclosureButton
                class="flex w-full items-start justify-between text-left text-gray-900 hover:text-indigo-700"
              >
                <span class="text-base font-semibold leading-7">{{
                  item.title
                }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <Icon v-if="!open" name="ph:plus" size="20" />
                  <Icon v-else name="ph:minus" size="20" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">
                {{ item.description }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const props = defineProps({
  title: { type: String },
  description: { type: String },
  items: { type: Array },
});
</script>
