<template>
  <div>
    <SectionsHero
      v-if="pageData.hero.sectionEnabled"
      :pin="pageData.hero.pin"
      :title="pageData.hero.title"
      :description="pageData.hero.description"
      :buttons="pageData.hero.buttons"
      :links="pageData.hero.links"
      :image="pageData.hero.image"
      :imageEnabled="pageData.hero.imageEnabled"
    />
    <SectionsLogos
      v-if="pageData.logos.sectionEnabled"
      :pin="pageData.logos.pin"
      :title="pageData.logos.title"
      :description="pageData.logos.description"
      :images="pageData.logos.images"
    />
    <SectionsOverview
      v-if="pageData.overview.sectionEnabled"
      :pin="pageData.overview.pin"
      :title="pageData.overview.title"
      :description="pageData.overview.description"
      :image="pageData.overview.image"
      :content="pageData.overview.content"
      id="overview"
      class="scroll-section"
    />
    <SectionsFeatures
      v-if="pageData.features.sectionEnabled"
      :pin="pageData.features.pin"
      :title="pageData.features.title"
      :description="pageData.features.description"
      :content="pageData.features.content"
      id="how-to-use"
      class="scroll-section"
    />
    <SectionsPricing
      v-if="pageData.pricing.sectionEnabled"
      :pin="pageData.pricing.pin"
      :title="pageData.pricing.title"
      :description="pageData.pricing.description"
      :items="pageData.pricing.items"
      id="pricing"
      class="scroll-section"
    />
    <SectionsTestimonialSingle
      v-if="pageData.testimonialSingle.sectionEnabled"
      :blockquote="pageData.testimonialSingle.blockquote"
      :personName="pageData.testimonialSingle.personName"
      :persontitle="pageData.testimonialSingle.persontitle"
      :image="pageData.testimonialSingle.image"
      :logo="pageData.testimonialSingle.logo"
    />
    <SectionsNewsletter
      v-if="pageData.newsletter.sectionEnabled"
      :title="pageData.newsletter.title"
      :description="pageData.newsletter.description"
      :items="pageData.newsletter.items"
    />
    <SectionsFAQs
      v-if="pageData.faqs.sectionEnabled"
      :title="pageData.faqs.title"
      :description="pageData.faqs.description"
      :items="pageData.faqs.items"
      id="faqs"
      class="scroll-section"
    />
    <SectionsCallToAction
      v-if="pageData.callToAction.sectionEnabled"
      :pin="pageData.callToAction.pin"
      :title="pageData.callToAction.title"
      :description="pageData.callToAction.description"
      :buttons="pageData.callToAction.buttons"
      :image="pageData.callToAction.image"
      id="download"
      class="scroll-section"
    />
  </div>
</template>

<script setup lang="ts">
import pageData from "~/data/homepage.json";
useHead({
  title: "OneIndigo Template",
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
