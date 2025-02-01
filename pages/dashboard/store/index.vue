<script setup>
useSeoMeta({
  title: "List Store",
});

const filter = ref({
  name: "",
  province: "",
  city: "",
  location: "",
  isActive: null,
});
</script>

<template>
  <div class="space-y-5">
    <BaseText size="xl" bold text="List Store" />
    <UForm :state="filter" class="grid grid-cols-6 gap-5 items-end w-[80%]">
      <UFormGroup name="name" label="Nama">
        <UInput v-model="filter.name" />
      </UFormGroup>
      <UFormGroup name="province" label="Provinsi">
        <UInput v-model="filter.province" />
      </UFormGroup>
      <UFormGroup name="city" label="Kota">
        <UInput v-model="filter.city" />
      </UFormGroup>
      <UFormGroup name="location" label="Lokasi">
        <UInput v-model="filter.location" />
      </UFormGroup>
      <BaseFormActive v-model="filter.isActive" label="Aktif?" />
      <UButton type="submit" label="Filter" icon="i-heroicons-magnifying-glass-16-solid" block />
    </UForm>
    <StoreTable />
  </div>
</template>
