<script setup>
useSeoMeta({
  title: "Edit Market",
});

const route = useRoute();
const toast = useToast();

const { state, schema, run } = patchMarket(route.params.id);
const { status, execute } = run();

// const { status: detailStatus } = getMarket().run({
//   onResponse: ({ response }) => {
//     state.value = response._data.data;
//   },
// });

const onSubmit = async () => {
  // await execute();
  toast.add({ title: "Market telah diupdate", color: "success" });
  navigateTo("/dashboard/market");
};
</script>

<template>
  <MarketForm
    type="update"
    v-model="state"
    :schema
    :loading="status === 'pending'"
    @submit="onSubmit"
  />
</template>
