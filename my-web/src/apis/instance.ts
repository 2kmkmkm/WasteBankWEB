import axios from "axios";

export const instance = axios.create({
  timeout: 5000,
  baseURL: "ec2-43-202-58-157.ap-northeast-2.compute.amazonaws.com",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
