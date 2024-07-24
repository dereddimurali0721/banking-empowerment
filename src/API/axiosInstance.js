import axios from "axios";

// baseURL: "http://localhost:8081",
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/customer/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
