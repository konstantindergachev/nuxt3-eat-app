export const useAuth = () => {
  const authCookie = useCookie('auth');
  const isAuth = Boolean(authCookie.value);

  if (isAuth) {
    return useState(() => ({
      isAuthenticated: isAuth,
    }));
  }

  return useState(() => ({
    isAuthenticated: false,
  }));
};
