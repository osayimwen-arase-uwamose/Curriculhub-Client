import { refresh as refreshRequest } from "../api/auth.api.js";
import useAuth from "./useAuth.js";

const useRefreshToken = () => { 
  const { setAccessToken } = useAuth();

  return async () => {
    const response = await refreshRequest();

    const newAccessToken = response.data.accessToken;

    setAccessToken(newAccessToken);

    return newAccessToken;
  };
};

export default useRefreshToken;
