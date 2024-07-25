import axiosInstance from "../axiosInstance";

export default async function getTranscationsData() {
  // return await axiosInstance.get("/transactions");
  return await axiosInstance.get(`/transactions/${sessionStorage.getItem('customerId')}/${sessionStorage.getItem('category')}/${sessionStorage.getItem('subCategory')}`);
}