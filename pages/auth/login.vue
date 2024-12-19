<template>
  <div class="w-full h-screen flex justify-end items-center">
    <div class="w-3/12 border-solid border-1 pr-40" style="">
      <label for="" class="text-3xl text-[#00A155] font-sm">Login</label>
      <div class="flex flex-col gap-5 mt-5">
        <UInput v-model="username" placeholder="Username" size="xl" />
        <UInput
          v-model="password"
          placeholder="Password"
          size="xl"
          type="password"
        />
      </div>
      <UButton size="xl" type="submit" class="mt-8">Login</UButton>
    </div>
  </div>
</template>
<script setup lang="ts">
const username = ref("");
</script>
