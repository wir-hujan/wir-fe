<script setup>
useSeoMeta({
  title: "List Employee",
});

const filter = ref({
  name: "",
  username: "",
  role: "",
  store: "",
  isActive: null,
});
</script>

<template>
  <div class="space-y-5">
    <BaseText size="xl" bold text="List Employee" />
    <UForm :state="filter" class="grid grid-cols-6 gap-5 items-end w-[80%]">
      <UFormGroup name="name" label="Nama">
        <UInput v-model="filter.name" />
      </UFormGroup>
      <UFormGroup name="username" label="username">
        <UInput v-model="filter.username" />
      </UFormGroup>
      <UFormGroup name="store" label="Toko">
        <UInput v-model="filter.store" />
      </UFormGroup>
      <UFormGroup name="role" label="Role">
        <UInput v-model="filter.role" />
      </UFormGroup>
      <BaseFormActive v-model="filter.isActive" label="Aktif?" />
      <UButton type="submit" label="Filter" icon="i-heroicons-magnifying-glass-16-solid" block />
    </UForm>
    <EmployeeTable />
  </div>
</template>
