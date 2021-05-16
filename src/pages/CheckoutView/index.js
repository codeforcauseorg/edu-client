import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button, IconButton, Link, Typography } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CheckoutCard from "../../components/checkout/CheckoutCard";
import clsx from "clsx";
import DropdownList from "../../components/checkout/DropdownList";
import data from "../../data/address.json";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  navigation: {
    widht: "100%",
    height: "100px",
    padding: theme.spacing(1, 2),
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sidePadding: {
    padding: theme.spacing(0, 2),
  },
  offers: {
    backgroundColor: "#F6F8FF",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  },
  promo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  promoCode: {
    fontStyle: "italic",
    paddingLeft: theme.spacing(1),
  },
  price: {
    marginBottom: theme.spacing(1),
  },
  checkout: {
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    color: "white",
  },
  button: {
    border: "3px solid white",
    padding: "5px 25px",
  },
  viewOffers: {
    cursor: "pointer",
  },
  marginBottom: { marginBottom: theme.spacing(2) },
  marginTop: { marginTop: theme.spacing(2) },
  paddingBottom: { paddingBottom: theme.spacing(2) },
  paddingTop: { paddingTop: theme.spacing(2) },
}));

const { countries, districts, states } = data[0];

const Checkout = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <div className={clsx(classes.navigation, classes.flex)}>
        <IconButton onClick={() => history.goBack()}>
          <ArrowBackIcon color="secondary" />
        </IconButton>
        <Typography variant="h3">Checkout</Typography>
        <MoreVertIcon style={{ color: "black" }} />
      </div>
      <div className={clsx(classes.sidePadding, classes.marginBottom, classes.paddingBottom)}>
        <Typography variant="h6" className={classes.marginBottom}>
          Order Details
        </Typography>
        <CheckoutCard />
      </div>
      <div className={clsx(classes.offers, classes.marginBottom)}>
        <div className={classes.sidePadding}>
          <Typography variant="h6" className={clsx(classes.paddingTop)}>
            <i>Offers</i>
          </Typography>
          <div className={clsx(classes.flex, classes.paddingBottom, classes.paddingTop)}>
            <div className={classes.promo}>
              <FiberManualRecordIcon color="secondary" />
              <Typography className={classes.promoCode}>Select Promo code</Typography>
            </div>
            <Link variant="body2" color="secondary" className={classes.viewOffers}>
              View Offers
            </Link>
          </div>
        </div>
      </div>
      <div className={clsx(classes.sidePadding, classes.paddingTop, classes.paddingBottom)}>
        <div className={clsx(classes.price, classes.flex)}>
          <Typography>Original Price</Typography>
          <Typography variant="body1">₹ 8094.00</Typography>
        </div>
        <div className={clsx(classes.price, classes.flex)}>
          <Typography>
            Taxes
            <span style={{ fontStyle: "italic", fontWeight: "normal" }}>
              {" "}
              {"("}incl. GST and VAT{")"}
            </span>
          </Typography>
          <Typography variant="body1" className={classes.viewOffers}>
            ₹ 94.00
          </Typography>
        </div>
        <div className={clsx(classes.price, classes.flex)}>
          <Typography>Total</Typography>
          <Typography variant="body1" className={classes.viewOffers}>
            ₹ 8292.00
          </Typography>
        </div>
        <Typography variant="h6" className={clsx(classes.paddingBottom, classes.paddingTop)}>
          Checkout Details
        </Typography>
        <Typography variant="subtitle2" className={clsx(classes.paddingBottom)}>
          Billing Address
        </Typography>
        <div className={classes.marginBottom}>
          <DropdownList title="Country" items={countries} />
        </div>
        <div className={classes.marginBottom}>
          <DropdownList title="District" items={districts} />
        </div>
        <div className={classes.marginBottom}>
          <DropdownList title="State" items={states} />
        </div>
        <div className={classes.marginBottom}>
          <DropdownList title="Flat no., Colony" items={null} disable={true} />
        </div>
      </div>
      <div className={clsx(classes.checkout)}>
        <div
          className={clsx(
            classes.sidePadding,
            classes.flex,
            classes.paddingBottom,
            classes.paddingTop
          )}
        >
          <div>
            <Typography variant="subtitle1">Order Total</Typography>
            <Typography variant="subtitle1">₹ 92.00</Typography>
          </div>
          <div>
            <Button variant="outlined" color="inherit" className={classes.button}>
              Complete Payment
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
