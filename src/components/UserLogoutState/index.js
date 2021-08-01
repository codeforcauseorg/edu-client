import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

function UserLogoutState() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <img src="assets/img/04_26_64_02.jpg" className={classes.image} />
      <Typography variant="h3" gutterBottom>
        You don&apos;t have any connected account !
      </Typography>
      <Typography variant="h5">Please Sign up and get access of complete website!</Typography>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4, 4),
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4, 0),
    },
  },
  image: {
    hight: "20%",
    width: "20%",
    margin: theme.spacing(2, 2),
    [theme.breakpoints.down("sm")]: {
      hight: "80%",
      width: "80%",
    },
    [theme.breakpoints.down("md")]: {
      hight: "40%",
      width: "40%",
    },
  },
}));

export default UserLogoutState;
