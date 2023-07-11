<template>
  <div>
    <SectionsContact
      v-if="pageData.contact.sectionEnabled"
      :title="pageData.contact.title"
      :description="pageData.contact.description"
      :address="pageData.contact.address"
      :phone="pageData.contact.phone"
      :email="pageData.contact.email"
    />
  </div>
</template>

<script setup lang="ts">
import pageData from "~/data/contact-us.json";

useHead({
  title: "Contact Page | OneIndigo Template",
  meta: [
    {
      name: "description",
      content: "The OneIndigo Vue 3 and Nuxt 3 template.",
    },
    { property: "og:title", content: "OneIndigo Template" },
    {
      property: "og:description",
      content: "The OneIndigo Vue 3 and Nuxt 3 template.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://nuxt.com" },
    { property: "og:locale", content: "en_US" },
    { property: "og:image", content: "/OneIndigo-og.png" },
  ],
  htmlAttrs: { lang: "en" },
});
</script>

<style>
#back-to-top {
  display: none;
}
</style>
