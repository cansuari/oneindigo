<template>
  <div>
    <SectionsHeroSimple
      v-if="pageData?.hero?.sectionEnabled"
      :title="pageData.hero.title"
      :description="pageData.hero.description"
    />
    <SectionsContent v-if="pageData?.content" :content="pageData.content" />
  </div>
</template>

<script setup lang="ts">
import pageData from "~/data/single.json";

useHead({
  title: "Single Page | OneIndigo Template",
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
