import axios from "../utils/axios";
import errorHandler from "./errorHandler";

export const addWishlist = (courseId) => {
  return async (dispatch) => {
    try {
      const wishlistData = {
        cId: courseId,
      };
      const response = await axios.put("/user/wishlist", wishlistData);
      if (response.status === 200) {
        await response.data;
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
      await response.data;
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
};
