import React from "react";

import { Container, Grid, makeStyles } from "@material-ui/core";
import DashboardHero from "./DashboardHero";
import DoubtsSection from "./DoubtsSection";
import CardSection from "./CardSection";

function MainSection() {
  const classes = useStyles();
  const cardElements = [
    {
      title: "Classroom",
      banner: "assets/img/classroomBanner.svg",
    },
    {
      title: "Interview your friend",
      banner: "assets/img/interviewBanner.svg",
    },
    {
      title: "Request TA support",
      banner: "assets/img/taSupportBanner.svg",
    },
  ];

  return (
    <Container disableGutters>
      <DashboardHero />
      <Grid container spacing={2} className={classes.grid}>
        {cardElements.map((items, index) => (
          <CardSection key={index} props={items} />
        ))}
      </Grid>

      <DoubtsSection />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({}));

export default MainSection;
