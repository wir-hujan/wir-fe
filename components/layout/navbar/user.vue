<script setup>
const toast = useToast();

const items = [
  [
    {
      label: "Profile",
      icon: "i-heroicons-user-circle-16-solid",
    },
  ],
  [
    {
      label: "Log out",
      icon: "i-heroicons-arrow-left-start-on-rectangle-20-solid",
      labelClass: 'text-danger dark:text-danger',
      iconClass: 'text-danger dark:text-danger',
      click: () => {
        toast.add({ title: "Logout berhasil" });
        return navigateTo("/");
      }
    },
  ],
]
</script>

<template>
  <UDropdown :items :popper="{ placement: 'bottom-start' }">
    <UButton variant="ghost" color="gray" icon="i-heroicons-user-solid" label="Tester masbro" class="max-sm:w-full" />
  </UDropdown>
</template>
