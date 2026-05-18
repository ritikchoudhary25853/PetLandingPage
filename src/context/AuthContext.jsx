import { useCallback, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AuthContext } from "./authContextValue";

export function AuthProvider({ children }) {
  const [user, setUser, clearUser] = useLocalStorage("pet-current-user", null);

  const login = useCallback(
    async ({ email }) => {
      const nextUser = {
        name: email.split("@")[0],
        email,
        avatar: `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(email)}`,
      };
      setUser(nextUser);
      return nextUser;
    },
    [setUser],
  );

  const register = useCallback(
    async ({ name, email }) => {
      const nextUser = {
        name,
        email,
        avatar: `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(name || email)}`,
      };
      setUser(nextUser);
      return nextUser;
    },
    [setUser],
  );

  const logout = useCallback(() => {
    clearUser();
  }, [clearUser]);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      register,
      logout,
    }),
    [login, logout, register, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
