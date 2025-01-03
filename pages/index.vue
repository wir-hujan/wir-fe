<script setup lang="ts">
useSeoMeta({
  title: "Welcome",
});
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center">
    <UCard class="sm:w-[30vw] text-center">
      <div class="space-y-5">
        <h1 class="font-bold text-xl">Welcome</h1>
        <UButton block to="/login" variant="soft" label="Login" />
      </div>
    </UCard>
  </div>
</template>
