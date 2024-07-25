import axios from "axios";

// baseURL: "http://localhost:8081",
const axiosInstance = axios.create({
  baseURL: "https://investment-qfv5rs5xfa-uc.a.run.app/customer/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
