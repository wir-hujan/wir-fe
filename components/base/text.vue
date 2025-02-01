<script setup lang="ts">
type TextSize = "xs" | "sm" | "md" | "lg" | "xl";

const props = withDefaults(
  defineProps<{
    text: string;
    size?: TextSize;
    bold?: boolean;
    as?: string;
    to?: string;
  }>(),
  {
    size: "md",
  }
);

const size: Record<TextSize, string> = {
  xl: "text-3xl",
  lg: "text-xl",
  md: "text-lg",
  sm: "text-md",
  xs: "text-sm",
};

const wrapperEl = computed(() => {
  const obj: { [key: string]: any } = {
    class: size[props.size],
  };

  if (props.to) obj["to"] = props.to;
  if (props.bold) obj["class"] += " font-bold";

  return obj;
});

const is = props.to ? "NuxtLink" : props.as ? props.as : "p";
</script>

<template>
  <component :is v-bind="wrapperEl">{{ text }}</component>
</template>
