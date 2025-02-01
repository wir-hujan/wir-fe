export const getStores = () => {
  const query = ref({
    page: 1,
    size: 15,
    search: "",
  });

  const run = () => useApi("/store", { query });

  return { query, run };
};