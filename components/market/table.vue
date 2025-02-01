<script setup>
const emit = defineEmits(["reset"]);
const toast = useToast();

const { params, run } = deleteMarket();
const { status, execute } = run();

const isModalOpen = ref(false);

const onOpenDeleteModal = (id) => {
  params.value.id = id;
  isModalOpen.value = true;
};
const onConfirm = async () => {
  // execute();
  toast.add({ title: "Market telah dihapus", color: "success" });
  isModalOpen.value = false;
  emit("reset");
};

const rows = [
  {
    id: 1,
    name: "PT Wingsfood",
    store: {
      id: 1,
      name: "Toko Cipoho",
    },
    is_active: true,
  },
  {
    id: 2,
    name: "CV Oregon",
    store: {
      id: 2,
      name: "Toko Balandongan",
    },
    is_active: false,
  },
];

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
    key: "store",
    label: "Toko",
  },
  {
    key: "action",
    label: "Aksi",
  },
];
</script>

<template>
  <div>
    <UCard :ui="{ body: { padding: '' } }">
      <UTable :rows :columns>
        <template #no-data="{ index }">
          {{ index + 1 }}
        </template>
        <template #store-data="{ row }">
          {{ row.store.name }}
        </template>
        <template #action-data="{ row }">
          <div class="flex items-center gap-2">
            <UButton
              :to="`/dashboard/market/${row.id}/edit`"
              color="info"
              icon="i-heroicons-pencil-solid"
            />
            <UButton
              color="danger"
              icon="i-heroicons-trash-solid"
              @click="onOpenDeleteModal(row.id)"
            />
          </div>
        </template>
      </UTable>
    </UCard>

    <BaseModalConfirmation
      v-model="isModalOpen"
      :loading="status === 'pending'"
      @confirm="onConfirm"
    >
      <template #description>
        Apakah anda yakin untuk menghapus data ini?
      </template>
    </BaseModalConfirmation>
  </div>
</template>
