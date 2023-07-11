<template>
  <div class="default">
    <BaseHeader :header="headerData" :navigation="mainNavigationData" />
    <main>
      <slot />
    </main>
    <BaseBackToTop />
    <BaseFooter id="footer" :footer="footerData" :navigation="footerNavigationData" />
  </div>
</template>
<script setup>
import headerData from "~/data/header.json";
import mainNavigationData from "~/data/navigation-main.json";
import footerData from "~/data/footer.json";
import footerNavigationData from "~/data/navigation-footer.json";
</script>
<style scoped>
.default {
  position: relative;
}
</style>