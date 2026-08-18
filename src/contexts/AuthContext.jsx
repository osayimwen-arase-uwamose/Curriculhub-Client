import {
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import tokenService from "../services/token.service.js";

import { refresh } from "../api/auth.api.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [accessToken, setAccessTokenState] =
    useState(
      tokenService.getAccessToken()
    );

  const [isInitializing, setIsInitializing] =
    useState(true);

  const login = ({
    user,
    accessToken,
  }) => {
    tokenService.setAccessToken(
      accessToken
    );

    setAccessTokenState(accessToken);
    setUser(user);
  };

  const logout = () => {
    tokenService.removeAccessToken();

    setAccessTokenState(null);
    setUser(null);
  };

  const setAccessToken = (token) => {
    tokenService.setAccessToken(token);

    setAccessTokenState(token);
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const existingToken =
        tokenService.getAccessToken();

      if (existingToken) {
        setIsInitializing(false);
        return;
      }

      try {
        const data = await refresh();

        if (data.accessToken) {
          tokenService.setAccessToken(
            data.accessToken
          );

          setAccessTokenState(
            data.accessToken
          );

          if (data.user) {
            setUser(data.user);
          }
        }
      } catch {
        tokenService.removeAccessToken();
      } finally {
        setIsInitializing(false);
      }
    };

    initializeAuth();
  }, []);

  const value = useMemo(
    () => ({
      user,
      accessToken,
      isInitializing,

      login,
      logout,

      setAccessToken,
      setUser,
    }),
    [
      user,
      accessToken,
      isInitializing,
    ]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
