/* eslint-disable camelcase */
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ShareIcon from "@material-ui/icons/Share";
import { useDispatch, useSelector } from "react-redux";
import { addWishlist, deleteWishlist } from "../../../../services/userService";
import useSWR, { mutate } from "swr";
import { loadData } from "../../../../services/apiService";
import SnackBarComponent from "../../../SnackBar/SnackBar";

function ShareAndWishlistButton({ action }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { data } = useSWR("/user/wishlist", loadData);

  const user = useSelector((state) => state.account.user);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { id, sharable_link } = action;

  const handleChange = () => {
    if (data?.includes(id)) {
      mutate(
        "/user/wishlist",
        data.filter((courseId) => courseId !== id),
        false
      );
      handleClick();
      dispatch(deleteWishlist(id));
    } else {
      mutate("/user/wishlist", [...data, id], false);
      handleClick();
      dispatch(addWishlist(id));
    }
  };

  const handleShareCourse = () => {
    console.log(sharable_link);
  };

  return (
    <Box mt={4} className={classes.container}>
      <Button className={classes.button} onClick={() => handleShareCourse()}>
        <Typography>Share</Typography>
        <ShareIcon className={classes.icon} />
      </Button>
      {!user ? (
        <Box />
      ) : (
        <Button className={classes.button} onClick={() => handleChange()}>
          <Typography>Add to wishlist</Typography>
          {!data?.includes(id) ? (
            <BookmarkBorderIcon className={classes.icon} />
          ) : (
            <BookmarkIcon className={classes.icon} />
          )}
        </Button>
      )}
      <SnackBarComponent
        vertical="bottom"
        horizontal="center"
        opensnack={open}
        handleClose={handleClose}
        severity="info"
        message={data?.includes(id) ? "Added to Wishlist" : "Deleted from Wishlist"}
        autoHideDuration={3000}
      />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  button: {
    border: "2px solid #ffffff",
    color: "#ffffff",
    textTransform: "none",
    marginRight: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1),
    },
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}));

export default ShareAndWishlistButton;
