import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

function AdBanner({ handleClick }) {
  const classes = useStyles();

  return (
    <Box className={classes.paper}>
      <Box className={classes.infoContainer}>
        <Typography className={classes.bannerMessage} variant="h4">
          🔥 Use CFC75 Coupon Code for 75% off 🔥
        </Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    background: "#3A3985",
    height: 50,
    width: "100%",
  },
  iconButton: {
    color: "#fff",
    position: "absolute",
    right: 0,
  },
  infoContainer: {
    display: "flex",
    color: "#fff",
    justifyContent: "center",
    paddingTop: theme.spacing(1.2),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(2),
    },
  },
  bannerMessage: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
    },
  },
}));

export default AdBanner;
