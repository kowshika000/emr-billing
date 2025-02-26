import axios from "axios";

const AxiosInstance = axios.create({
  baseURL:
    "http://ec2-13-48-24-177.eu-north-1.compute.amazonaws.com:8080/app/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosInstance;
