import { Container, makeStyles, Hidden } from "@material-ui/core";
import React from "react";
import MainSection from "../../../components/DashboardComponents/MainSection";
import SecondarySection from "../../../components/DashboardComponents/SecondarySection";

function Dashboard() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Container className={classes.innerContainer} disableGutters>
        <MainSection />
        <Hidden lgDown>
          <SecondarySection />
        </Hidden>
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  innerContainer: { display: "flex", maxWidth: "100%", marginTop: theme.spacing(10) },
  root: {
    maxWidth: "94%",
  },
  textBox: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
}));

export default Dashboard;
