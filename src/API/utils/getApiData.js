import axiosInstance from "../axiosInstance";

/**
 * This is a generalized function to fetch data from backend.
 * It takes `url` as a parameter and return the data returned at that particular end point.
 * url must be in the form of "/path_of_the_end_pont"
 * @param { string } url
 */
export default async function getApiData(url) {
  return axiosInstance.get(url);
}
