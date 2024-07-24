import axiosInstance from "../axiosInstance";

export default async function getExpenditure() {
  // return await axiosInstance.get("/expenditure");
  return await axiosInstance.get(`/trends/${sessionStorage.getItem('customerId')}/Expenditure`);
}
