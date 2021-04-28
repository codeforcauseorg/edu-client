import React from "react";
import { Grid, Typography, makeStyles, Container } from "@material-ui/core";
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"
></link>;

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  message: {
    color: "grey",
    marginTop: "170px",
  },
}));

function DisplayMessage() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid align="center" justify="center" spacing={1} alignItems="center">
        <Typography variant="h3" className={classes.message}>
          Wishlist is empty
        </Typography>
      </Grid>
    </Container>
  );
}

export default DisplayMessage;
