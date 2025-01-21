<template>
  <UFormGroup :name :label="label ?? name" :required>
    <USelect
      v-model="model"
      searchable
      :name
      :options
      :placeholder
      :loading
      :disabled
      option-attribute="label"
      value-attribute="value"
      v-bind="$attrs"
    />
  </UFormGroup>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
    required: false,
  },
  name: {
    type: String,
    default: "isActive",
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
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  noAllOption: {
    type: Boolean,
    default: false,
  },
});

const model = defineModel({
  type: Number,
});

const options = ACTIVE_OPTIONS;

onBeforeMount(() => {
  if (props.noAllOption)
    options.shift();
});
</script>
