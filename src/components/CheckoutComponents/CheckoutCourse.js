import { Box, makeStyles } from "@material-ui/core";
import React from "react";

function CheckoutCourse() {
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
}
const useStyles = makeStyles((theme) => ({
  root: {
    background: "red",
    flex: 8,
  },
}));

export default CheckoutCourse;
