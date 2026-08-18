import { useEffect } from "react";

import axiosClient from "../api/axiosClient.js";

import useAuth from "./useAuth.js";
import useRefreshToken from "./useRefreshToken.js";

export default function useAxiosPrivate() {
  const { accessToken, logout } = useAuth();

  const refreshAccessToken = useRefreshToken();

  useEffect(() => {
    let refreshPromise = null;

    const requestInterceptor =
      axiosClient.interceptors.request.use(
        (config) => {
          if (!config.headers.Authorization && accessToken) {
            config.headers.Authorization =
              `Bearer ${accessToken}`;
          }

          return config;
        },
        (error) => Promise.reject(error)
      );

    const responseInterceptor =
      axiosClient.interceptors.response.use(
        (response) => response,

        async (error) => {
          const previousRequest = error.config;

          if (
            error.response?.status !== 401 ||
            previousRequest?.sent
          ) {
            return Promise.reject(error);
          }

          previousRequest.sent = true;

          try {
            if (!refreshPromise) {
              refreshPromise = refreshAccessToken().finally(() => {
                refreshPromise = null;
              });
            }

            const newAccessToken =
              await refreshPromise;

            previousRequest.headers.Authorization =
              `Bearer ${newAccessToken}`;

            return axiosClient(previousRequest);
          } catch (refreshError) {
            logout();

            return Promise.reject(refreshError);
          }
        }
      );

    return () => {
      axiosClient.interceptors.request.eject(
        requestInterceptor
      );

      axiosClient.interceptors.response.eject(
        responseInterceptor
      );
    };
  }, [
    accessToken,
    refreshAccessToken,
    logout,
  ]);

  return axiosClient;
};