import axios from "../utils/axios";
import errorHandler from "./errorHandler";

export const addWishlist = (courseId) => {
  return async (dispatch) => {
    try {
      const response = await axios.put("/user/wishlist", {
        cId: courseId,
      });
      if (response.status === 200) {
        const data = await response.data;
        console.log(data);
      }
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
};

export const deleteWishlist = (courseId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/user/wishlist/${courseId}`);
      const data = await response.data;
      console.log(data);
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
};
