import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import RedeemCodeList from "./RedeemCodeList";

const listElements = [
  {
    title: "20% off",
    subtitle: "Avale on your first transaction",
    image:
      "https://cdn1.iconfinder.com/data/icons/ecommerce-moonlit/32/Discount_percent_percent_tag_price_tag_sale_shop_tag-512.png",
  },
  {
    title: "2 peers",
    subtitle: "Accepted your referral invite",
    image:
      "https://cdn2.iconfinder.com/data/icons/black-friday-130/512/32_Hot_shop_deal_sale-512.png",
  },
];
const useStyles = makeStyles((theme) => ({
  root: { marginTop: theme.spacing(1.5) },
}));
function RedeemCode() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {listElements.map((items, index) => (
        <RedeemCodeList
          key={index}
          title={items.title}
          subtitle={items.subtitle}
          image={items.image}
        />
      ))}
    </Box>
  );
}

export default RedeemCode;
