import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { USER_CART_ENDPOINT } from "../../../../constants/apiEndpoints";
import { addCart } from "../../../../services/userService";
import SnackBarComponent from "../../../SnackBar/SnackBar";
import { mutate } from "swr";

function VideoCard(props) {
  const classes = useStyles();

  const { videoInfo } = props;

  const { courseTrailerUrl, crossPrice, originalPrice, courseThumbnail, id, cartList } = videoInfo;

  const isUpcoming = false; // testing purpose

  const dispatch = useDispatch();

  const history = useHistory();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCart = (id) => {
    if (cartList.includes(id)) {
      history.replace("/checkout");
    } else {
      mutate(USER_CART_ENDPOINT, [...cartList, id], false);
      handleClick();
      dispatch(addCart(id));
    }
  };

  const currentUser = useSelector((state) => state.account.user);

  return (
    <Box className={classes.videoContainer}>
      <ReactPlayer
        controls={true}
        light={courseThumbnail}
        url={courseTrailerUrl}
        volume={1}
        height={200}
        width="100%"
      />
      <Box mt={2} className={classes.container}>
        <Box mb={2} className={classes.priceContainer}>
          <Typography variant="h2" className={classes.price}>
            ₹{originalPrice}
          </Typography>
          <Typography variant="h4" className={classes.originalPrice}>
            ₹{crossPrice}
          </Typography>
        </Box>
        {!isUpcoming === true ? (
          <Button className={classes.button} onClick={() => history.push("/checkout")}>
            <Typography variant="h6"> Enroll Now</Typography>
          </Button>
        ) : (
          <Button className={classes.button}>
            <Typography variant="h6">Upcoming</Typography>
          </Button>
        )}
        <Button
          className={classes.cartButton}
          onClick={() => (currentUser && isUpcoming !== true ? handleCart(id) : handleClick())}
        >
          <Typography>Add to Cart</Typography>
        </Button>
      </Box>
      <SnackBarComponent
        vertical="bottom"
        horizontal="center"
        opensnack={open}
        handleClose={handleClose}
        severity="info"
        message={
          currentUser
            ? isUpcoming !== true
              ? "Added to Cart"
              : "Hey this course is yet to come !!"
            : "Hey please login to perform this operation !"
        }
        autoHideDuration={3000}
      />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#fff",
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
    "&:hover": {
      background: "#fff",
    },
  },
  cartButton: {
    border: "2px solid #ffffff",
    color: "#ffffff",
    textTransform: "none",
    marginTop: theme.spacing(1.5),
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1),
    },
  },
  videoContainer: {
    flex: 1.5,
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(5),
    borderRadius: "5px",
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(5),
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    color: "#fff",
    marginRight: theme.spacing(2),
  },
  originalPrice: {
    textDecoration: " line-through",
    color: "#fff",
    opacity: 0.6,
  },
  applyCoupon: {
    marginTop: theme.spacing(2),
    textTransform: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      fontWeight: 700,
      background: "#fff",
    },
  },
}));

export default VideoCard;
