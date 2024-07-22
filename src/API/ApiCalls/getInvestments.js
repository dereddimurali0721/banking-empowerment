import axiosInstance from "../axiosInstance";

export default async function getInvestments() {
  return await axiosInstance.get("/investments");
}
