import axios from 'axios';

export const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((config) => {
  config.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
  return config;
});
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
);
