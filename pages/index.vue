<script setup lang="ts">
// testing store
const authStore = useAuthStore();

const input = ref();
// testing vueuse
const text = refDebounced(input, 1000);
</script>

<template>
  <div>
    <UInput v-model="input"/>
    {{ text }}
  </div>
</template>
