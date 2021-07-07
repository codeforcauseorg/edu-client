/* eslint-disable no-unused-vars */
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
];

function OrderSummary() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
            <ListItemText primary="Order Details" />
          </ListItem>

          <List>
            {listItems.map((items, index) => (
              <ListItem key={index} className={classes.subListItem}>
                <ListItemText primary={items.title} />
                <Typography>{items.value}</Typography>
              </ListItem>
            ))}
          </List>
        </List>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
    flex: 5,
    paddingRight: theme.spacing(12),
  },
  stepper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  listItems: {
    background: "#fff",
    borderRadius: "10px",
  },
  subListItem: {
    width: "50%",
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
