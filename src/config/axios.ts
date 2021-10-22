import axios from "axios";
import { auth } from "./firebase";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
})

axiosInstance.interceptors.request.use(async (config) => {
  config.params = {
    ...config.params,
    key: process.env.REACT_APP_APIKEY,
  };
  if (auth?.currentUser) {
    const token = await auth.currentUser.getIdToken();
    config.headers = {
      ...config.headers,
      authorization: `Bearer ${token}`,
    };
  }
  return config;
})