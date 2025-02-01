<script setup></script>

<template>
  <header>
    <nav class="w-full bg-white dark:bg-slate-700 py-3 shadow">
      <div class="flex items-center mx-5 sm:mx-36 md:mx-48 lg:mx-60">
        <div class="basis-1/6">
          <BaseText text="Logo" class="font-bold" size="lg" @click="navigateTo('/dashboard')" />
        </div>
        <div class="flex-1">
          <LayoutNavbarMenu />
        </div>
        <div class="basis-1/6 flex items-center justify-end gap-5">
          <DarkModeSwitcher class="max-sm:hidden" />
          <LayoutNavbarUser class="max-sm:hidden" />

          <UPopover class="sm:hidden" :popper="{ placement: 'bottom-end' }">
            <UIcon name="i-heroicons-bars-3" class="text-2xl translate-y-1" />
            <template #panel>
              <div class="flex flex-col">
                <DarkModeSwitcher>Toggle mode</DarkModeSwitcher>
                <LayoutNavbarUser class="w-full" />
              </div>
            </template>
          </UPopover>
        </div>
      </div>
    </nav>
  </header>
</template>
