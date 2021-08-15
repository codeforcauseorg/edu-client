import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import useSWR from "swr";
import CheckoutCourse from "../../components/CheckoutComponents/CheckoutCourse";
import OrderSummary from "../../components/CheckoutComponents/OrderSummary";
import { USER_CART_ENDPOINT } from "../../constants/apiEndpoints";
import { loadData } from "../../services/apiService";
function Checkout() {
  const classes = useStyles();

  const { data: cartList } = useSWR(USER_CART_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  return (
    <Box mt={8} className={classes.root}>
      {cartList?.length ? (
        <>
          <CheckoutCourse cartList={cartList} />
          <OrderSummary cartList={cartList} />
        </>
      ) : (
        <Box className={classes.emptyCart}>
          <img src="/assets/img/empty_cart.svg" />
          <Typography variant="h3" className={classes.title}>
            Your cart is Empty
          </Typography>
        </Box>
      )}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#F5F8F9",
    height: "100%",
    marginTop: theme.spacing(0),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  emptyCart: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0),
      paddingTop: theme.spacing(4),
    },
  },
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

export default Checkout;
