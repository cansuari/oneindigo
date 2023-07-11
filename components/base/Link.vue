<template>
  <NuxtLink
    class="font-semibold text-sm flex items-center cursor-pointer focus:outline-none focus:shadow-outline transition-all hover:translate-x-1"
    :target="target"
    :to="url"
    :class="`text-${color}`"
  >
    <Icon
      v-if="icon && iconPosition === 'left'"
      :name="iconName"
      :size="iconSize"
      class="mr-2"
    />
    {{ label }}
    <Icon
      v-if="icon && iconPosition === 'right'"
      :name="iconName"
      :size="iconSize"
      class="ml-2"
    />
  </NuxtLink>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  url: { type: String, required: false, default: null },
  label: { type: String, default: "Button" },
  id: { type: String },
  name: { type: String },
  color: { type: String, default: "" },
  iconPosition: { type: String, default: "right" },
  iconSize: { type: String, default: "20" },
  iconName: { type: String, default: "mdi:arrow-right-thin" },
  icon: Boolean,
  external: Boolean,
});

const target = computed(() => {
  if (props.external) {
    return "_blank";
  } else {
    return "_self";
  }
});
</script>

<!-- colors: [
"gray",
"yellow",
"orange",
"red",
"green",
"teal",
"blue",
"indigo",
"purple",
"pink",
...
],
textColors: [
"white",
"purple-600",
...
],
sizes: ["lg", "md", "sm"] -->
