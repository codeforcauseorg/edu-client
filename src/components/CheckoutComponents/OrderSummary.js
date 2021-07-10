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
} from "@material-ui/core";
import React from "react";

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

function OrderSummary() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((activeStep) => activeStep + 1);
  };

  const handlePayment = () => {
    setActiveStep(2);
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
        <Button onClick={() => handlePayment()} className={classes.paymentButton}>
          Make Payment
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
    marginTop: theme.spacing(8),
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
}));
export default OrderSummary;

/* <Box>
        <Box>
          <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Box> */
