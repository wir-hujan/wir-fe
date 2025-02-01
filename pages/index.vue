<script setup>
definePageMeta({
  layout: "blank",
});

useSeoMeta({
  title: "Login",
});

const toast = useToast();

const authStore = useAuthStore();

const { state, schema, run } = postLogin();
const { execute, data, status } = run();

const date = ref();

const onSubmit = async (e) => {
  await execute();

  // authStore.token = data.value.token;
  // authStore.refreshToken = data.value.refreshToken;
  // authStore.setUser(data.value);
  toast.add({ title: "Login success", color: "success" });
  navigateTo("/dashboard");
};
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center">
    <UCard class="w-full mx-5 sm:w-[30vw]">
      <div class="flex justify-between">
        <h1 class="text-xl font-bold">Login</h1>
        <DarkModeSwitcher :display-text-on-mobile="false" />
      </div>
      <UForm :state :schema class="mt-4 space-y-5" @submit="onSubmit">
        <UFormGroup name="username" label="Username">
          <UInput v-model="state.username" />
        </UFormGroup>
        <UFormGroup name="password" label="Password">
          <BaseFormPassword v-model="state.password" />
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
