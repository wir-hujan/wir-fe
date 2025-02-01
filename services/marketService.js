import { number, object, string } from "yup";

export const getMarkets = () => {
  const query = ref({
    page: 1,
    size: 15,
    search: "",
  });

  const run = () => useApi("/market", { query });

  return { query, run };
};

export const getMarket = (id = null) => {
  const params = ref({
    id,
  });

  const run = () => useApi(() => `/market/${params.value.id}`);

  return { params, run };
};

export const postMarket = () => {
  const state = ref({
    name: null,
    store_id: null,
  });

  const schema = object({
    name: string().required("Nama wajib diisi"),
    store_id: number().typeError("Toko wajib diisi").required("Toko wajib diisi"),
  });

  const run = () => useMutation("/market", { body: state });

  return { state, schema, run };
};

export const patchMarket = (id = null) => {
  const params = ref({
    id,
  });

  const state = ref({
    name: null,
    store_id: null,
  });

  const schema = object({
    name: string().required("Nama wajib diisi"),
    store_id: number().typeError("Toko wajib diisi").required("Toko wajib diisi"),
  });

  const run = () =>
    useMutation("/market", { method: "patch", body: state, params });

  return { params, state, schema, run };
};

export const deleteMarket = (id = null) => {
  const params = ref({
    id,
  });

  const run = () =>
    useMutation(() => `/market/${params.value.id}`, { method: "delete" });

  return { params, run };
};
