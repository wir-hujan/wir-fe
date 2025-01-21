<script setup lang="ts">
const rows = ref([
  {
    id: 1,
    name: "Cipoho",
    province: {
      id: 1,
      name: "Jakarta",
    },
    city: {
      id: 1,
      name: "Pasar Minggu",
    },
    location: "Jl. Jalan",
    is_active: true,
  },
  {
    id: 2,
    name: "Balandongan",
    province: {
      id: 1,
      name: "Jakarta",
    },
    city: {
      id: 1,
      name: "Pasar Minggu",
    },
    location: "Jl. Jalan",
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
    key: "province",
    label: "Provinsi",
  },
  {
    key: "city",
    label: "Kota",
  },
  {
    key: "location",
    label: "Lokasi",
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
      <template #province-data="{ row }">
        {{ row.province.name }}
      </template>
      <template #city-data="{ row }">
        {{ row.city.name }}
      </template>
      <template #is_active-data="{ row }">
        <UBadge variant="soft" :color="row.is_active ? 'success' : 'danger'">
          {{ row.is_active ? "Aktif" : "Tidak Aktif" }}
        </UBadge>
      </template>
      <template #action-data="{ row }">
        <div class="flex items-center gap-2">
          <UButton
            :to="`/dashboard/store/${row.id}`"
            color="info"
            icon="i-heroicons-pencil-solid"
          />
          <UButton color="danger" icon="i-heroicons-trash-solid" />
        </div>
      </template>
    </UTable>
  </UCard>
</template>
