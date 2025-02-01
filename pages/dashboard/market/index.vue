<script setup>
useSeoMeta({
  title: "List Market",
});

const filter = ref({
  name: "",
  store: "",
  isActive: null,
});

const onReset = () => {}
</script>

<template>
  <div class="space-y-5">
    <div class="flex items-center justify-between">
      <BaseText size="xl" bold text="List Market" />
      <UButton to="/dashboard/market/create" label="Create" />
    </div>
    <UForm :state="filter" class="grid sm:grid-cols-6 gap-5 items-end sm:w-[80%]">
      <UFormGroup name="name" label="Nama">
        <UInput v-model="filter.name" />
      </UFormGroup>
      <UFormGroup name="store" label="Toko">
        <UInput v-model="filter.store" />
      </UFormGroup>
      <UButton type="submit" label="Filter" icon="i-heroicons-magnifying-glass-16-solid" block />
    </UForm>
    <MarketTable @reset="onReset" />
  </div>
</template>
