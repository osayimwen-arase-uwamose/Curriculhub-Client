import {
  login as loginRequest,
  register as registerRequest,
  logout as logoutRequest,
} from "../api/auth.api.js";

import tokenService from "./token.service.js";

const authService = {
  async login(credentials) {
    const response =
      await loginRequest(credentials);

    const {
      accessToken,
      user,
    } = response.data;

    if (!accessToken) {
      throw new Error(
        "Authentication response did not contain an access token."
      );
    }

    tokenService.setAccessToken(
      accessToken
    );

    return {
      accessToken,
      user,
    };
  },

  async register(data) {
    return registerRequest(data);
  },

  async logout() {
    try {
      await logoutRequest();
    } finally {
      tokenService.removeAccessToken();
    }
  },
};

export default authService;