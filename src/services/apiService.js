import axios from "../utils/axios";

// Axios get request
export const loadData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
