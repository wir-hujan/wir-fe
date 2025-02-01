export const useAuthStore = defineStore("auth", () => {
  const token = useCookie("token", {
    maxAge: 60 * 60 * 24,
  });

  const user = ref({
    id: null,
    name: null,
    username: null,
    password: null,
    createdAt: null,
    createdBy: null,
    updatedAt: null,
    updatedBy: null,
    deletedAt: null,
    deletedBy: null,
  });

  const setUser = (payload) => {
    user.value = { ...user.value, ...payload };
  };

  const destroyData = () => {
    token.value = undefined;
    user.value = undefined;
  };

  return { token, user, setUser, destroyData };
});
