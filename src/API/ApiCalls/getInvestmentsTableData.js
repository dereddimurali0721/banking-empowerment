import axiosInstance from "../axiosInstance";

export default async function getInvestmentsTableData() {
  return await axiosInstance.get("/investmentstable");
}
