import axiosInstance from "../axiosInstance";

export default async function getExpenditure() {
  return await axiosInstance.get("/expenditure");
}
