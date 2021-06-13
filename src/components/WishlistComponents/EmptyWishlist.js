import { Box, Button, Fade, makeStyles, Typography } from "@material-ui/core";
import React from "react";

function EmptyWishlist() {
  const classes = useStyle();
  return (
    <Fade in={true} timeout={500}>
      <Box className={classes.root}>
        <img className={classes.image} src="assets/icon/empty_wishlist_icon.svg" />
        <Box className={classes.container}>
          <Typography variant="h3">Your wishlist is empty!</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Explore more and shortlist some items
          </Typography>
          <Box mt={5}>
            <Button className={classes.exploreButton}>
              <Typography>Explore</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}

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
  exploreButton: {
    textTransform: "none",
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.main,
    },
    color: "#fff",
    padding: theme.spacing(1, 5),
  },
}));

export default EmptyWishlist;
