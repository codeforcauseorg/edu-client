import { Container, makeStyles, Hidden, Box, Typography } from "@material-ui/core";
import React from "react";
import CardContainer from "../../../components/cardContainer/cardContainer";
import MainSection from "../../../components/DashboardComponents/MainSection";
import SecondarySection from "../../../components/DashboardComponents/SecondarySection";
import ChallengesCard from "../../../components/DashboardComponents/SubComponents/ChallengesCard";

function Dashboard() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Container className={classes.innerContainer} disableGutters>
        <MainSection />
        <Hidden mdDown>
          <SecondarySection />
        </Hidden>
      </Container>
      <Box className={classes.textBox}>
        <Typography variant="h2">Contests</Typography>
      </Box>
      <CardContainer>
        {[1].map((items, index) => (
          <ChallengesCard key={index} />
        ))}
      </CardContainer>
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
