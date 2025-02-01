<script setup>
const emit = defineEmits(["submit"]);

const props = defineProps({
  schema: Object,
  type: String, // create|update
  loading: {
    type: Boolean,
    default: false,
  },
});

const state = defineModel({ type: Object });

const isModalOpen = ref(false);
</script>

<template>
  <div class="space-y-10 sm:w-[60%]">
    <div class="flex max-sm:flex-col items-baseline gap-5">
      <BaseText
        bold
        size="xl"
        :text="`${type === 'create' ? 'Create' : 'Update'} Market`"
      />
      <UButton
        variant="soft"
        icon="i-heroicons-arrow-left"
        color="info"
        to="/dashboard/market"
        label="Kembali"
      />
    </div>

    <UForm :state :schema class="space-y-5" @submit="isModalOpen = true">
      <UFormGroup name="name" label="Nama">
        <UInput v-model="state.name" :loading />
      </UFormGroup>

      <BaseFormStore v-model="state.store_id" :loading />

      <UButton :loading type="submit" label="Submit" />
    </UForm>

    <BaseModalConfirmation
      v-model="isModalOpen"
      :loading="status === 'pending'"
      @confirm="$emit('submit')"
    >
      <template #description>
        Apakah anda yakin untuk
        {{ type === "create" ? "Membuat" : "Mengupdate" }} data ini?
      </template>
    </BaseModalConfirmation>
  </div>
</template>
