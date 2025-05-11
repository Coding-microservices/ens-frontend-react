import axios from "axios";

const securedApi = axios.create({
    baseURL: import.meta.env.API_URL,
});

securedApi.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default securedApi;
