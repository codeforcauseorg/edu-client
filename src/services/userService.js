import {
  UPDATE_USER_ENDPOINT,
  USER_CART_ENDPOINT,
  USER_ENROLLED_COURSE_ENDPOINT,
  USER_WISHLIST_ENDPOINT,
} from "../constants/apiEndpoints";
import axios from "../utils/axios";
import errorHandler from "./errorHandler";
import { storage } from "../firebase";
import { userLoading } from "../store/actions/userActions";
import { paymentLoading, paymentSuccess } from "../store/actions/paymentAction";

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

// edit user details asyns function + upload user coverPic

export const editUser = (
  firstName,
  lastName,
  phoneNumber,
  description,
  address,
  coverPhotoFile
) => {
  return async (dispatch) => {
    try {
      dispatch(userLoading(true));
      if (coverPhotoFile.name) {
        const ref = storage.ref(`/userCoverImages/${coverPhotoFile.name}`);
        const uploadTask = ref.put(coverPhotoFile);
        uploadTask.on("state_changed", console.log, console.error, () => {
          ref.getDownloadURL().then((url) => {
            dispatch(
              updateUserDetails(firstName, lastName, phoneNumber, description, address, url)
            );
          });
        });
      } else {
        dispatch(
          updateUserDetails(firstName, lastName, phoneNumber, description, address, coverPhotoFile)
        );
      }
    } catch (error) {
      dispatch(userLoading(false));
      errorHandler(error, dispatch);
    }
  };
};

export const updateUserDetails = (firstName, lastName, phoneNumber, description, address, url) => {
  return async (dispatch) => {
    try {
      const addUserDetails = {
        wishlist: [],
        first_Name: firstName,
        last_Name: lastName,
        phone: phoneNumber,
        description: description,
        address: address,
        coverPhotoUrl: url,
      };
      const response = await axios.put(UPDATE_USER_ENDPOINT, addUserDetails);
      if (response.status === 200) {
        await response.data;
        dispatch(userLoading(false));
      }
    } catch (error) {
      dispatch(userLoading(false));
      errorHandler(error, dispatch);
    }
  };
};

// enroll course  async function

export const userEnrolledCourse = (courseId, userID) => {
  return async (dispatch) => {
    dispatch(paymentLoading(true));
    try {
      const enrolledData = {
        studentId: userID,
        courseId: courseId,
      };
      const response = await axios.put(USER_ENROLLED_COURSE_ENDPOINT, enrolledData);
      if (response.status === 200) {
        const result = await response.data;
        console.log(result);
        dispatch(paymentLoading(false));
        dispatch(paymentSuccess(true));
      }
    } catch (error) {
      // errorHandler(error, dispatch);
      console.log(error);
      dispatch(userLoading(false));
    }
  };
};
