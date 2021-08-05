/* eslint-disable camelcase */
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ShareIcon from "@material-ui/icons/Share";
import { useDispatch } from "react-redux";
import { addWishlist, deleteWishlist } from "../../../../services/userService";
import useSWR from "swr";
import { loadData } from "../../../../services/apiService";

function ShareAndWishlistButton({ action }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data } = useSWR("/user/wishlist", loadData);

  // const [wishlist, setwishlist] = useState(false);
  const { id, sharable_link } = action;
  console.log(id);
  console.log(data?.includes(id));

  const handleChange = () => {
    if (data?.includes(id)) {
      dispatch(deleteWishlist(id));
    } else {
      dispatch(addWishlist(id, data));
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
      {data === undefined ? (
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
