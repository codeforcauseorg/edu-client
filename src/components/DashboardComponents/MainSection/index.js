import React from "react";

import { Box, Container, makeStyles } from "@material-ui/core";
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
      <Box className={classes.box}>
        {cardElements.map((items, index) => (
          <CardSection key={index} props={items} index={index} />
        ))}
      </Box>

      <DoubtsSection />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
}));

export default MainSection;
