import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ShareIcon from "@material-ui/icons/Share";

function ShareAndWishlistButton() {
  const classes = useStyles();
  const [addWishlist, setaddWishlist] = useState(false);

  const handleChange = () => {
    setaddWishlist(!addWishlist);
  };

  return (
    <Box mt={4} className={classes.container}>
      <Button className={classes.button}>
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
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
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
