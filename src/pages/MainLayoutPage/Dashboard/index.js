import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import DashboardHero from "../../../components/DashboardComponents/DashboardHero";
import DashboardTabComponent from "../../../components/DashboardComponents/DashboardTabComponent";

function Dashboard() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <DashboardHero />
      <Typography className={classes.title} variant="h2" color="textPrimary">
        Profile & settings
      </Typography>
      <DashboardTabComponent />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      padding: "0",
    },
  },
  title: {
    marginTop: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
      marginRight: "20px",
    },
  },
}));

export default Dashboard;
