<script setup>
defineProps({
  displayTextOnMobile: {
    type: Boolean,
    default: true,
  },
});

const colorMode = useColorMode();

const isDark = computed({
  get: () => colorMode.value === "dark",
  set: () =>
    (colorMode.preference = colorMode.value === "dark" ? "light" : "dark"),
});
</script>

<template>
  <ClientOnly>
    <UButton
      v-bind="$attrs"
      variant="ghost"
      color="gray"
      @click="isDark = !isDark"
    >
      <div class="flex items-center gap-3">
        <UIcon
          v-if="isDark"
          name="i-solar-moon-bold"
          class="hidden dark:inline-block size-5 text-white"
        />
        <UIcon
          v-else
          name="i-solar-sun-bold"
          class="dark:hidden size-5 text-slate-600"
        />
        <div class="sm:hidden" :class="{ hidden: !displayTextOnMobile }">
          Turn {{ isDark ? "off" : "on" }} dark mode
        </div>
      </div>
    </UButton>
  </ClientOnly>
</template>
