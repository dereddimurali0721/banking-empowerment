import axiosInstance from "../axiosInstance";

export default async function getInvestmentsTableData() {
  // return await axiosInstance.get("/transactions");
  return await axiosInstance.get(`/investment/${sessionStorage.getItem('fixedRate')}`);
}
