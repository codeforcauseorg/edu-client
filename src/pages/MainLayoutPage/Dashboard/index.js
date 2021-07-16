import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import MainSection from "../../../components/DashboardComponents/MainSection";
import SecondarySection from "../../../components/DashboardComponents/SecondarySection";

function Dashboard() {
  const classes = useStyles();

  return (
    <Container className={classes.root} disableGutters>
      <MainSection />
      <SecondarySection />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", maxWidth: "90%", marginTop: theme.spacing(10) },
}));

export default Dashboard;
