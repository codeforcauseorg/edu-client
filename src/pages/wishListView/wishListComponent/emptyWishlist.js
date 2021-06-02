import { Box, Fade, makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyle = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(10),
  },
  container: {
    marginTop: theme.spacing(3),
  },
  image: {
    height: 200,
    width: 200,
  },
}));
function EmptyWishlist() {
  const classes = useStyle();
  return (
    <Fade in={true} timeout={500}>
      <Box className={classes.root}>
        <img className={classes.image} src="assets/icon/empty_wishlist_icon.svg" />
        <Box className={classes.container}>
          <Typography variant="h4">Your wishlist is empty!</Typography>
          <Typography variant="subtitle1">Explore more and shortlist some items</Typography>
        </Box>
      </Box>
    </Fade>
  );
}

export default EmptyWishlist;
