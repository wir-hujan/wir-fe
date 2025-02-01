<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Toko",
    required: false,
  },
  name: {
    type: String,
    default: "store_id",
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  withAllOption: {
    type: Boolean,
    default: false,
  },
});

const model = defineModel({
  type: [Number, null], // Mengizinkan null sebagai nilai kosong
});

const options = [];

// const { data: options, status } = getStores().run({
//   transform: (v) => {
//     return v.data;
//   },
// });
</script>

<template>
  <UFormGroup :name :label="label ?? name" :required>
    <USelectMenu
      v-model="model"
      searchable
      :name
      :options="Array.isArray(options) ? options : []"
      :placeholder
      :disabled="status === 'pending'"
      :loading="status === 'pending'"
      option-attribute="name"
      value-attribute="id"
      v-bind="$attrs"
    />
  </UFormGroup>
</template>
