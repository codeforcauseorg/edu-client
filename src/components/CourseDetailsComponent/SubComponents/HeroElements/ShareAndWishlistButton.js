/* eslint-disable camelcase */
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ShareIcon from "@material-ui/icons/Share";
import { useDispatch } from "react-redux";
// import { deleteWishlist } from "../../../../services/userService";
import { userError } from "../../../../store/actions/userActions";

function ShareAndWishlistButton({ action }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [addWishlist, setaddWishlist] = useState(false);
  // const { id, sharable_link } = action;

  const handleChange = () => {
    setaddWishlist(!addWishlist);
    dispatch(userError("Error"));
    if (addWishlist === false) {
      // dispatch(addWishlist(id));
    } else {
      // dispatch(deleteWishlist(id));
    }
  };

  const handleShareCourse = () => {
    // console.log(sharable_link);
  };

  return (
    <Box mt={4} className={classes.container}>
      <Button className={classes.button} onClick={() => handleShareCourse()}>
        <Typography>Share</Typography>
        <ShareIcon className={classes.icon} />
      </Button>
      <Button className={classes.button} onClick={() => handleChange()}>
        <Typography>Add to wishlist</Typography>
        {!addWishlist ? (
          <BookmarkBorderIcon className={classes.icon} />
        ) : (
          <BookmarkIcon className={classes.icon} />
        )}
      </Button>
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
