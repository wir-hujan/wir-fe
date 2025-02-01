<script setup>
useSeoMeta({
  title: "Create Market",
});

const toast = useToast();

const { state, schema, run } = postMarket();
const { status, execute } = run();

const onSubmit = async () => {
  // await execute();
  toast.add({ title: "Market telah dibuat", color: "success" });
  navigateTo("/dashboard/market");
};
</script>

<template>
  <MarketForm
    type="create"
    v-model="state"
    :schema
    :loading="status === 'pending'"
    @submit="onSubmit"
  />
</template>
