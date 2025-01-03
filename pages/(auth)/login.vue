<script setup lang="ts">
const toast = useToast();

const authStore = useAuthStore();

const { state, schema, run } = postLogin();
const { execute, data, status } = run();

const date = ref<FormDatePicker>();

const onSubmit = async (e: FormEventSubmit<typeof schema>) => {
  await execute();

  // authStore.token = data.value.token;
  // authStore.refreshToken = data.value.refreshToken;
  // authStore.setUser(data.value);
  toast.add({ title: "Login success", color: 'success' });
};
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center">
    <UCard class="sm:w-[30vw]">
      <div class="flex justify-between">
        <h1 class="text-xl font-bold">Login</h1>
        <DarkModeSwitcher />
      </div>
      <UForm :state :schema class="mt-4 space-y-5" @submit="onSubmit">
        <UFormGroup name="username" label="Username">
          <UInput v-model="state.username" />
        </UFormGroup>
        <UFormGroup name="password" label="Password">
          <BaseFormPassword v-model="state.password" />
        </UFormGroup>
        <UFormGroup label="Pilih tanggal buat testing aja">
          <BaseFormDatepicker v-model="date" />
        </UFormGroup>
        <div>
          <UButton
            type="submit"
            label="Submit"
            :loading="status === 'pending'"
          />
        </div>
      </UForm>
    </UCard>
  </div>
</template>
