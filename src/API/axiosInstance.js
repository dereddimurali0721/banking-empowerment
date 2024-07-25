import axios from "axios";

// baseURL: "http://localhost:8081",
const axiosInstance = axios.create({
  baseURL: "https://lloyds-hack-grp-41.de.r.appspot.com/customer/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
