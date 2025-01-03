export const useAuthStore = defineStore("auth", () => {
  const token = useCookie("token", {
    maxAge: 60 * 60 * 24,
  });

  const refreshToken = useCookie("refresh_token", {
    maxAge: 60 * 60 * 48,
  });

  const user = ref<Employee>();

  const setUser = (payload: Employee) => {
    user.value = { ...user.value, ...payload };
  };

  const destroyData = () => {
    token.value = undefined;
    refreshToken.value = undefined;
    user.value = undefined;
  };

  return { token, refreshToken, user, setUser, destroyData };
});
