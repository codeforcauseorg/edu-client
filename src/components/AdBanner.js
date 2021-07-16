import { Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import React from "react";

function AdBanner({ handleClick }) {
  const classes = useStyles();

  return (
    <Box className={classes.paper}>
      <IconButton className={classes.iconButton} onClick={handleClick}>
        <Clear />
      </IconButton>
      <Box className={classes.infoContainer}>
        <Typography variant="h3">🔥 Use CFC75 Coupon Code for 75% off 🔥</Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    background: "#3C424E",
    height: 70,
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
    paddingTop: theme.spacing(2.5),
  },
}));

export default AdBanner;
