import { Box, Divider, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useSWR, { mutate } from "swr";
import {
  ALL_COURSE_CARD_ENDPOINT,
  USER_CART_ENDPOINT,
  USER_WISHLIST_ENDPOINT,
} from "../../constants/apiEndpoints";
import { loadData } from "../../services/apiService";
import { addWishlist, deleteCart } from "../../services/userService";
import SnackBarComponent from "../SnackBar/SnackBar";
import CheckoutCourseList from "./SubComponents/CheckoutCourseList";

function CheckoutCourse() {
  const classes = useStyles();

  const { data: courseData } = useSWR(ALL_COURSE_CARD_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const { data: cartList } = useSWR(USER_CART_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const { data } = useSWR(USER_WISHLIST_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const [cart, setCart] = useState([]);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const userCart = courseData?.filter((course) => cartList?.includes(course._id));
    setCart(userCart);
  }, [cartList]);

  // delete element from userCartList array

  const deleteCartCourse = (id) => {
    handleClick();
    mutate(
      USER_CART_ENDPOINT,
      cartList.filter((courseId) => courseId !== id),
      false
    );
    const filterCartList = cart.filter((course) => course._id !== id);
    setCart(filterCartList);
    dispatch(deleteCart(id));
  };

  const moveToWishlist = (id) => {
    deleteCartCourse(id);
    mutate(USER_WISHLIST_ENDPOINT, [...data, id], false);
    handleClick();
    dispatch(addWishlist(id));
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h4">Course in Cart ({cartList?.length})</Typography>
      <Divider className={classes.divider} />
      {cart.map((items, index) => (
        <CheckoutCourseList
          key={index}
          courseInfo={items}
          removeItem={() => deleteCartCourse(items._id)}
          moveToWishlist={() => moveToWishlist(items._id)}
        />
      ))}
      <SnackBarComponent
        vertical="bottom"
        horizontal="center"
        opensnack={open}
        handleClose={handleClose}
        severity="info"
        message={"Course deleted from cart"}
        autoHideDuration={3000}
      />
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    margin: theme.spacing(4),
    padding: theme.spacing(4, 4),
    borderRadius: "5px",
    flex: 8,
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0),
      padding: theme.spacing(2, 2),
    },
  },
  divider: {
    marginTop: theme.spacing(2),
  },
}));

export default CheckoutCourse;
