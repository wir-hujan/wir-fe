<script setup>
const rows = ref([
  {
    id: 1,
    name: "Rizky",
    username: "kakujaa0015",
    role: {
      id: 1,
      name: "Superadmin",
    },
    store: {
      id: 1,
      name: "Toko Cipoho",
    },
    is_active: true,
  },
  {
    id: 2,
    name: "Tester",
    username: "tester123",
    role: {
      id: 1,
      name: "Superadmin",
    },
    store: {
      id: 2,
      name: "Toko Balandongan",
    },
    is_active: false,
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
    key: "username",
    label: "Username",
  },
  {
    key: "role",
    label: "Role",
  },
  {
    key: "store",
    label: "Toko",
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
      <template #role-data="{ row }">
        {{ row.role.name }}
      </template>
      <template #store-data="{ row }">
        {{ row.store.name }}
      </template>
      <template #is_active-data="{ row }">
        <UBadge variant="soft" :color="row.is_active ? 'success' : 'danger'">
          {{ row.is_active ? "Aktif" : "Tidak Aktif" }}
        </UBadge>
      </template>
      <template #action-data="{ row }">
        <div class="flex items-center gap-2">
          <UButton
            :to="`/dashboard/employee/${row.id}`"
            color="info"
            icon="i-heroicons-pencil-solid"
          />
          <UButton color="danger" icon="i-heroicons-trash-solid" />
        </div>
      </template>
    </UTable>
  </UCard>
</template>
