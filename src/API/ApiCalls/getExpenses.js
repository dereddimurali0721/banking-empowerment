import axiosInstance from "../axiosInstance";

export default async function getExpenses() {
  return await axiosInstance.get("/expenses");
}
