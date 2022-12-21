import axios from "axios";
import jwt_decode from "jwt-decode";
import { axiosConfig } from "../config/axios.config";

export const Axios = axios.create({
  timeout: axiosConfig.timeout,
  baseURL: axiosConfig.baseURL,
});

export const AxiosAuth = axios.create({
  timeout: axiosConfig.timeout,
  baseURL: axiosConfig.baseURL,
});

AxiosAuth.interceptors.request.use(
  async (config) => {
    let accessToken = localStorage.getItem('accessToken')
    let refreshToken = localStorage.getItem('refreshToken')
    if (!accessToken) return config;

    let date = new Date();
    let decodedAccessToken = jwt_decode(accessToken);

    // expire access token is valid
    if (decodedAccessToken?.exp > date.getTime() / 1000) {
      return {
        ...config,
        headers: {
          ...config.headers,
          authorization: `Bearer ${accessToken}`,
        },
      };
    }

    // request refresh token when access token is expired
    try {
      let { data } = await Axios.post("/auth/refresh-token", { refreshToken });
      localStorage.setItem('accessToken', data.accessToken)
      config.headers["authorization"] = "Bearer " + data.accessToken;
    } catch (err) {
      alert(err.response?.data);
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
