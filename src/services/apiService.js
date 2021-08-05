import axios from "../utils/axios";
// Axios get request

export const loadData = async (url) => {
  const res = await axios.get(url);
  return res.data;
};
