import axiosInstance from "../axiosInstance";

export default async function getExpenses() {
  // return await axiosInstance.get("/expenses");
  return await axiosInstance.get(`/trends/${sessionStorage.getItem('customerId')}/Expense`);
}
