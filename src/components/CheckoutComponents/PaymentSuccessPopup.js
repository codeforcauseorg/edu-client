import { makeStyles, Modal, Paper, Typography } from "@material-ui/core";
import React from "react";

function PaymentSuccessPopup({ onClose, open }) {
  const classes = useStyles();

  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <Paper className={classes.paper}>
        <img src="/illustrations/successDesign.svg" className={classes.image} />
        <img src="/illustrations/SuccessTick.svg" className={classes.successTickImage} />
        <Typography variant="h6" className={classes.title}>
          Payment Successful !!
        </Typography>
      </Paper>
    </Modal>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: "30%",
    height: "40%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    [theme.breakpoints.down("lg")]: {
      width: "90%",
      height: "85%",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "absolute",
    height: "60%",
    width: "50%",
    left: "23%",
    bottom: "22%",
  },
  successTickImage: {
    position: "absolute",
    left: "36%",
    bottom: "35%",
  },
  title: {
    position: "absolute",
    bottom: 20,
    left: "30%",
  },
}));

export default PaymentSuccessPopup;
