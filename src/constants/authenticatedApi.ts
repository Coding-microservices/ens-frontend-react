import axios from "axios";

const authenticatedApi = axios.create(); // без baseURL

authenticatedApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default authenticatedApi;