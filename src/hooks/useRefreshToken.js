import { refresh as refreshRequest } from "../api/auth.api.js";
import useAuth from "./useAuth.js";

const useRefreshToken = () => { 
  const { setAccessToken } = useAuth();

  return async () => {
    const data = await refreshRequest();

    const newAccessToken = data.accessToken;

    setAccessToken(newAccessToken);

    return newAccessToken;
  };
};

export default useRefreshToken;
