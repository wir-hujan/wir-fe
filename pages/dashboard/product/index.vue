<script setup lang="ts">
useSeoMeta({
  title: "List Product",
});

const filter = ref({
  name: "",
  code: "",
  type: "",
  unit: "",
  isActive: null,
});
</script>

<template>
  <div class="space-y-5">
    <BaseText size="xl" bold text="List Product" />
    <UForm :state="filter" class="grid grid-cols-6 gap-5 items-end w-[80%]">
      <UFormGroup name="name" label="Nama">
        <UInput v-model="filter.name" />
      </UFormGroup>
      <UFormGroup name="code" label="Code">
        <UInput v-model="filter.code" />
      </UFormGroup>
      <UFormGroup name="type" label="Tipe Barang">
        <UInput v-model="filter.type" />
      </UFormGroup>
      <UFormGroup name="unit" label="Unit">
        <UInput v-model="filter.unit" />
      </UFormGroup>
      <BaseFormActive v-model="filter.isActive" label="Aktif?" />
      <UButton type="submit" label="Filter" icon="i-heroicons-magnifying-glass-16-solid" block />
    </UForm>
    <ProductTable />
  </div>
</template>
