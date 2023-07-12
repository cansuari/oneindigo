<template>
  <footer>
    <div class="bg-indigo-900">
      <div class="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <a
          class="flex title-font text-center font-medium items-center text-white mb-4 md:mb-0"
          href="/"
        >
          <img v-if="footer.logo" :src="footer.logo" />
          <span v-if="footer.title" class="block w-full ml-3 text-xl font-bold">
            {{ footer.title }}
          </span>
        </a>
        <nav
          v-if="navigation?.length > 0"
          class="mt-10 text-sm"
          aria-label="quick links"
        >
          <div class="-my-1 md:flex justify-center md:gap-x-6">
            <a
              v-for="nav in navigation"
              class="block text-center md:inline-block py-3 px-2 md:py-1 text-sm text-indigo-100 hover:text-indigo-300"
              :href="nav.url"
            >
              {{ nav.label }}
            </a>
          </div>
        </nav>
        <div
          v-if="footer.socialAccounts?.length > 0"
          class="mt-10 flex items-center justify-center gap-x-6"
        >
          <a
            v-for="account in footer.socialAccounts"
            class="group"
            :aria-label="`OneIndigo on ${account.name}`"
            :href="account.url"
          >
            <Icon
              :name="`mdi:${account.icon}`"
              size="40"
              class="text-indigo-100 hover:text-indigo-300"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="bg-gray-900">
      <div
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center border-t border-slate-400/10 py-5 sm:flex-row-reverse sm:justify-between"
      >
        <a
          :href="'mailto:' + footer.email"
          class="block w-full lg:w-auto text-indigo-200 hover:text-indigo-400 text-sm leading-7 text-center"
          >Contact us
          <Icon
            name="ph:arrow-up-right-thin"
            class="text-indigo-200"
            size="20"
          />
        </a>
        <p class="mt-6 text-sm text-indigo-200 sm:mt-0">
          <span v-html="footer.copyright"></span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  footer: { type: Object },
  navigation: { type: Array },
});
</script>
