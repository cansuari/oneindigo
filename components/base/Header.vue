<template>
  <header
    class="bg-transparent z-10 w-full transition-all"
    :class="[
      isHeaderSticky
        ? 'sticky top-0 bg-white shadow-md shadow-gray-100 py-3'
        : 'relative py-6',
    ]"
  >
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <img
            v-if="header && header.logo"
            class="h-8 w-auto"
            :src="header.logo.url"
            :alt="header.logo.alt"
          />
          <span
            v-if="header && header.title"
            class="ml-3 text-xl font-bold bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-900 text-transparent bg-clip-text"
            :class="{ 'sr-only': header && header.logo }"
          >
            {{ header.title }}
          </span>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Icon name="mdi-light:menu" size="40" />
        </button>
      </div>
      <div
        v-if="navigation && navigation.length > 0"
        class="hidden lg:flex lg:gap-x-12"
      >
        <a
          v-for="(item, index) in navigation"
          :key="index"
          :href="'/'+item.url"
          class="py-4 mr-2 hover:text-indigo-600 transition-all duration-200 snap-center"
          :class="{
            'hash-navigation-active':
              $route.hash == item.url || $route.path == '/' + item.url,
          }"
          @click="clickNavigationItem(item.url)"
        >
          {{ item.label }}
        </a>
      </div>
      <BaseButton
        v-if="header?.cta"
        class="md:ml-5 hidden lg:block"
        :key="header.cta.label"
        :label="header.cta.label"
        :url="header.cta.url"
        :color="header.cta.color"
        :textColor="header.cta.textColor"
        :outline="header.cta.outline"
        :rounded="header.cta.rounded"
        :size="header.cta.size"
        :icon="header.cta.icon"
        :iconPosition="header.cta.iconPosition"
        :iconName="header.cta.iconName"
        :iconSize="header.cta.iconSize"
        :id="header.cta.id"
        :name="header.cta.name"
      />
    </nav>
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 z-10"
      @click="mobileMenuOpen = false"
    ></div>
    <transition name="dialog-fade">
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="/">
            <img
              v-if="header && header.logo"
              class="h-8 w-auto"
              :src="header.logo.url"
              :alt="header.logo.alt"
            />
            <span
              v-if="header && header.title"
              class="text-xl font-bold bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-900 text-transparent bg-clip-text"
              :class="{ 'sr-only': header && header.logo }"
            >
              {{ header.title }}
            </span>
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <Icon name="iconamoon:sign-times-thin" size="40" />
          </button>
        </div>
        <div class="flow-root">
          <div class="my-6 divide-y divide-gray-500/10">
            <a
              v-for="item in navigation"
              :key="item.label"
              :href="'/'+item.url"
              class="block py-4 mr-5 hover:text-indigo-600 transition-all duration-200 snap-center"
              :class="{
                'hash-navigation-active':
                  $route.hash == item.url || $route.path == '/' + item.url,
              }"
              @click.native="clickNavigationItem(item.url)"
            >
              {{ item.label }}
            </a>
          </div>
          <BaseButton
            v-if="header?.cta"
            class="lg:hidden w-fit"
            :key="header.cta.label"
            :label="header.cta.label"
            :external="header.cta.external"
            :url="header.cta.url"
            :color="header.cta.color"
            :textColor="header.cta.textColor"
            :outline="header.cta.outline"
            :rounded="header.cta.rounded"
            :size="header.cta.size"
            :icon="header.cta.icon"
            :iconPosition="header.cta.iconPosition"
            :iconName="header.cta.iconName"
            :iconSize="header.cta.iconSize"
            :id="header.cta.id"
            :name="header.cta.name"
          />
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  header: { type: Object },
  navigation: { type: Array },
});

const mobileMenuOpen = ref(false);
const isHeaderSticky = ref(false);
const clickTriggered = ref(false);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  isHeaderSticky.value = window.scrollY > 5;
  const sections = document.querySelectorAll(".scroll-section"); // Adjust the selector to match your section elements

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + window.pageYOffset;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + rect.height &&
      clickTriggered.value !== true
    ) {
      window.location.hash = section.id;
      break;
    }
  }
};

const clickNavigationItem = (item) => {
  clickTriggered.value = true;
  if (item.includes("#")) window.location.hash = item;
  setTimeout(() => {
    clickTriggered.value = false;
  }, 2000);
};
</script>
