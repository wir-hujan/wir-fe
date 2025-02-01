<script setup>
const rows = ref([
  {
    id: 1,
    name: "Sabun",
    code: "100010",
    type: "Misc",
    unit: "PCS",
    is_active: true,
  },
  {
    id: 2,
    name: "Snack",
    code: "100011",
    type: "Makanan",
    unit: "PCS",
    is_active: true,
  },
]);

const columns = [
  {
    key: "no",
    label: "No",
  },
  {
    key: "name",
    label: "Nama",
  },
  {
    key: "code",
    label: "Code",
  },
  {
    key: "type",
    label: "Tipe Barang",
  },
  {
    key: "unit",
    label: "Unit",
  },
  {
    key: "is_active",
    label: "Aktif?",
  },
  {
    key: "action",
    label: "Aksi",
  },
];
</script>

<template>
  <UCard :ui="{ body: { padding: '' } }">
    <UTable :rows :columns>
      <template #no-data="{ index }">
        {{ index + 1 }}
      </template>
      <template #is_active-data="{ row }">
        <UBadge variant="soft" :color="row.is_active ? 'success' : 'danger'">
          {{ row.is_active ? "Aktif" : "Tidak Aktif" }}
        </UBadge>
      </template>
      <template #action-data="{ row }">
        <div class="flex items-center gap-2">
          <UButton
            :to="`/dashboard/product/${row.id}`"
            color="info"
            icon="i-heroicons-pencil-solid"
          />
          <UButton color="danger" icon="i-heroicons-trash-solid" />
        </div>
      </template>
    </UTable>
  </UCard>
</template>
