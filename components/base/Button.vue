<template>
  <NuxtLink
    class="btn font-semibold text-sm flex items-center cursor-pointer focus:outline-none focus:shadow-outline transition-all hover:-translate-y-1"
    :target="target"
    :to="url"
    :class="btnClasses"
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
  type: { type: String, default: "a" },
  id: { type: String },
  name: { type: String },
  color: { type: String, default: "" },
  textColor: { type: String, default: "" },
  size: { type: String, default: "md" },
  iconPosition: { type: String, default: "right" },
  iconSize: { type: String, default: "20" },
  iconName: { type: String, default: "mdi:arrow-right-thin" },
  outline: Boolean,
  icon: Boolean,
  rounded: Boolean,
  external: Boolean,
});
const colorClasses = computed(() => {
  const color = props.color;
  const text = props.textColor;
  const baseClasses = `bg-${color} text-${text} border-${color} hover:bg-${color} hover:border-${color} border shadow hover:shadow-lg hover:shadow-${color}/30`;
  const outlineClasses = `border-${color} text-${color} border shadow hover:shadow-lg hover:shadow-${color}/30`;
  return props.outline ? outlineClasses : baseClasses;
});

const sizeClasses = computed(() => {
  const sizeMappings = {
    sm: `py-2 text-sm px-4`,
    md: `py-3 px-6`,
    lg: `text-lg py-5 px-12`,
  };

  return sizeMappings[props.size] || sizeMappings.md;
});

const btnClasses = computed(() => {
  const borderRadiusClasses = props.rounded ? "rounded-lg" : "rounded";
  return `${colorClasses.value} ${sizeClasses.value} ${borderRadiusClasses}`;
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
