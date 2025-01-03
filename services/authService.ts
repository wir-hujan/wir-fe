import { object, string } from "yup";

export const postLogin = () => {
  const state = ref({
    username: "",
    password: "",
    device_name: "iphone",
  });

  const schema = object({
    username: string().required("Username wajib diisi"),
    password: string().required("Password wajib diisi"),
    device_name: string().required("Device wajib diisi"),
  });

  const run = () =>
    useMutation("/login", {
      body: state,
    });

  return { state, schema, run };
};
