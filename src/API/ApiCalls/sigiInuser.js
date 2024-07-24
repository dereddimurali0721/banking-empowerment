import axiosInstance from "../axiosInstance";

export default async function signInUser(data) {
  return await axiosInstance.post("/login", data);
}
