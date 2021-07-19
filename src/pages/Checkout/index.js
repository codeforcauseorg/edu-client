import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import CheckoutCourse from "../../components/CheckoutComponents/CheckoutCourse";
import OrderSummary from "../../components/CheckoutComponents/OrderSummary";
import NavBar from "../../components/NavBar/index";
function Checkout() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Box mt={8} className={classes.root}>
        <CheckoutCourse />
        <OrderSummary />
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#F5F8F9",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));
export default Checkout;
