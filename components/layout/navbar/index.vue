<script setup lang="ts"></script>

<template>
<header>
  <nav class="w-full bg-white dark:bg-slate-700 py-3 shadow">
    <div class="flex items-center mx-5 sm:mx-36 md:mx-48 lg:mx-60">
      <div class="basis-1/6">
        <BaseText text="Logo" class="font-bold" size="lg" />
      </div>
      <div class="flex-1">
        <LayoutNavbarMenu />
      </div>
      <div class="basis-1/6 flex items-center justify-end gap-5">
        <DarkModeSwitcher />
        <LayoutNavbarUser />
      </div>
    </div>
  </nav>
</header>
</template>
