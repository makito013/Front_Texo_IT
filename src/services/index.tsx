import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL,
});

api.interceptors.response.use((response) => {
  return response;
});

export default api;
