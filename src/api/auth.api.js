import axiosClient from "./axiosClient.js";
import ENDPOINTS from "../data/endpoints.js";

export const login = async (credentials) => {
  const response = await axiosClient.post(
    ENDPOINTS.AUTH.LOGIN,
    credentials
  );

  return response.data;
};

export const register = async (data) => {
  const response = await axiosClient.post(
    ENDPOINTS.AUTH.REGISTER,
    data
  );

  return response.data;
};

export const logout = async () => {
  const response = await axiosClient.post(
    ENDPOINTS.AUTH.LOGOUT
  );

  return response.data;
};

export const refresh = async () => {
  const response = await axiosClient.post(
    ENDPOINTS.AUTH.REFRESH
  );

  return response.data;
};

export const getProfile = async () => {
  const response = await axiosClient.get(
    ENDPOINTS.AUTH.PROFILE
  );

  return response.data;
};