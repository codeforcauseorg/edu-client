import { USER_CART_ENDPOINT, USER_WISHLIST_ENDPOINT } from "../constants/apiEndpoints";
import axios from "../utils/axios";
import errorHandler from "./errorHandler";

// Add wishlist asyns function

export const addWishlist = (courseId) => {
  return async (dispatch) => {
    try {
      const wishlistData = {
        cId: courseId,
      };
      const response = await axios.put(USER_WISHLIST_ENDPOINT, wishlistData);
      if (response.status === 200) {
        await response.data;
      }
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
};

// Delete wishlist asyns function

export const deleteWishlist = (courseId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(USER_WISHLIST_ENDPOINT + "/" + courseId);
      await response.data;
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
};

// Add Cart asyns function

export const addCart = (courseId) => {
  return async (dispatch) => {
    try {
      const cartData = {
        cId: courseId,
      };
      const response = await axios.put(USER_CART_ENDPOINT, cartData);
      if (response.status === 200) {
        await response.data;
      }
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
};

// Delete Cart asyns function

export const deleteCart = (courseId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(USER_CART_ENDPOINT + "/" + courseId);
      await response.data;
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
};
