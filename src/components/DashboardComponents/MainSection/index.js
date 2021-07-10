import React from "react";

import { Container, makeStyles, Box, Typography } from "@material-ui/core";
import DashboardHero from "./DashboardHero";
import DoubtsSection from "./DoubtsSection";
import CardContainer from "../../cardContainer/cardContainer";
import CourseEnrolledCard from "../SubComponents/CourseEnrolledCard";
import ChallengesCard from "../SubComponents/ChallengesCard";

function MainSection() {
  const classes = useStyles();
  return (
    <Container disableGutters>
      <DashboardHero />
      <Box className={classes.textBox}>
        <Typography variant="h2">Enrolled Courses</Typography>
      </Box>
      <CardContainer>
        {[1, 2, 3, 4, 5, 6].map((items, index) => (
          <CourseEnrolledCard key={index} />
        ))}
      </CardContainer>
      <DoubtsSection />
      <Box className={classes.textBox}>
        <Typography variant="h2">Challenges</Typography>
      </Box>
      <CardContainer>
        {[1, 2, 3, 4, 5, 6].map((items, index) => (
          <ChallengesCard key={index} />
        ))}
      </CardContainer>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  textBox: {
    marginTop: theme.spacing(6),
  },
}));
export default MainSection;
