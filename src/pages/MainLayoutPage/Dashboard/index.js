import { Container, makeStyles, Hidden } from "@material-ui/core";
import React from "react";
import MainSection from "../../../components/DashboardComponents/MainSection";
import SecondarySection from "../../../components/DashboardComponents/SecondarySection";
import useSWR from "swr";
import { loadData } from "../../../services/apiService";

function Dashboard() {
  const classes = useStyles();

  const { data: currentUserData } = useSWR("/user/get", loadData);

  console.log(currentUserData);

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
  innerContainer: { display: "flex", maxWidth: "100%", marginTop: theme.spacing(5) },
  root: {
    maxWidth: "94%",
  },
  textBox: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
}));

export default Dashboard;
