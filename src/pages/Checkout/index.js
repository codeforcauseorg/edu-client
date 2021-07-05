import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import CheckoutCourse from "../../components/CheckoutComponents/CheckoutCourse";
import OrderSummary from "../../components/CheckoutComponents/OrderSummary";

function Checkout() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CheckoutCourse />
      <OrderSummary />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));
export default Checkout;
