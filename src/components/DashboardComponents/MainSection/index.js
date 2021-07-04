import React from "react";

import { Box, makeStyles } from "@material-ui/core";
import DashboardHero from "./DashboardHero";
import EnrolledCourses from "./EnrolledCourses";
import DoubtsSection from "./DoubtsSection";
import ChallengesSection from "./ChallengesSection";

function MainSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <DashboardHero />
      <EnrolledCourses />
      <DoubtsSection />
      <ChallengesSection />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 4,
  },
}));
export default MainSection;
