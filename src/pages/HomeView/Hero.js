import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    background: "linear-gradient(180deg, #17003C 0%, rgba(0, 0, 0, 0) 100%)",
    color: "#fff",
    paddingBottom: "120px",
  },
  heading: {
    padding: "40px 0px 12px",
  },
  img: {
    borderRadius: "6px",
    marginTop: "18px",
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography className={classes.heading} variant="h2">
        Learn from the experts how to expertise
      </Typography>
      <Typography variant="h3" style={{ color: "#FFB2B2" }}>
        Know us connect with us on live!!
      </Typography>
      <img className={classes.img} src="/assets/img/home.png" alt="" />
    </Container>
  );
}
