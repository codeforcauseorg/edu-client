import { Box, makeStyles } from "@material-ui/core";
import React from "react";

function OrderSummary() {
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
    background: "#000",
    flex: 5,
  },
}));
export default OrderSummary;
