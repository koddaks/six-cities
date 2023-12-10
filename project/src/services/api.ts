import axios, { AxiosInstance } from 'axios';
import { getToken } from './token';

const BASE_URL = 'https://11.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
      if (!config.headers) {
        config.headers = {};
      }

      config.headers['x-token'] = token;
    }
    return config;
  });

  return api;
};
