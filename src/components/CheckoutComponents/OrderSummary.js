import {
  Box,
  makeStyles,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import { GET_USER_ENDPOINT } from "../../constants/apiEndpoints";
import { loadData } from "../../services/apiService";
import { userEnrolledCourse } from "../../services/userService";

function getSteps() {
  return ["Overview", "Payment"];
}

const listItems = [
  {
    title: "Original price:",
    value: "₹18000",
  },
  {
    title: "Discounted price:",
    value: "₹10000",
  },
  {
    title: "Coupon discounted:",
    value: "₹100",
  },
];

function OrderSummary({ cartList }) {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);

  const steps = getSteps();

  const dispatch = useDispatch();

  const handleNext = () => {
    setActiveStep((activeStep) => activeStep + 1);
  };

  const { loading } = useSelector((state) => state.payment);

  const { data: currentUser } = useSWR(GET_USER_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const handlePayment = () => {
    if (currentUser) {
      setActiveStep(2);
      cartList.map((courseID) => dispatch(userEnrolledCourse(courseID, currentUser.id)));
    }
  };

  return (
    <Box pt={8} className={classes.root}>
      <Typography variant="h2">Order Summary</Typography>
      <Box className={classes.stepper}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      <Box>
        <List>
          <ListItem className={classes.listItems}>
            <ListItemText>
              <Typography variant="h4">Order Details</Typography>
            </ListItemText>
          </ListItem>

          <List>
            {listItems.map((items, index) => (
              <ListItem key={index} className={classes.subListItem}>
                <ListItemText primary={items.title} />
                <Typography>{items.value}</Typography>
              </ListItem>
            ))}
          </List>
          <ListItem>
            <ListItemText>
              <Typography variant="h4">Total Amount</Typography>
              <Typography variant="h4" component="h1" className={classes.priceValue}>
                ₹1800
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      {activeStep === 0 ? (
        <Button onClick={() => handleNext()} className={classes.paymentButton}>
          Checkout
        </Button>
      ) : (
        <Button onClick={() => (loading ? "" : handlePayment())} className={classes.paymentButton}>
          {loading ? (
            <CircularProgress size={20} className={classes.progressIndicator} />
          ) : (
            `Make Payment`
          )}
        </Button>
      )}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    flex: 5,
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  stepper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(0),
    },
  },
  listItems: {
    background: "#fff",
    borderRadius: "10px",
  },
  subListItem: {
    width: "100%",
  },
  paymentButton: {
    color: "#fff",
    background: theme.palette.primary.main,
    textTransform: "none",
    marginBottom: theme.spacing(8),
    "&:hover": {
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  },
  priceValue: {
    marginTop: theme.spacing(1),
  },
  progressIndicator: {
    color: "#fff",
  },
}));
export default OrderSummary;
