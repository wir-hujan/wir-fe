<script setup>
const model = defineModel({
  default: "",
});

const isShow = ref(false);
</script>

<template>
  <UInput
    v-model="model"
    :type="isShow ? 'text' : 'password'"
    autocomplete
    :ui="{
      icon: {
        trailing: {
          pointer: '',
          padding: {
            '2xs': '',
            xs: '',
            sm: '',
            xl: '',
            lg: '',
            md: '',
          },
        },
      },
    }"
  >
    <template #trailing>
      <UButton
        color="gray"
        variant="ghost"
        class="px-3 py-2 mr-1"
        @click="isShow = !isShow"
      >
        <UIcon :name="isShow ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'" />
      </UButton>
    </template>
  </UInput>
</template>
