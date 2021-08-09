import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import LearningInfo from "./SubComponents/AboutElements/LearningInfo";
import CourseIncludes from "./SubComponents/AboutElements/CourseIncludes";
import DescriptionContainer from "./SubComponents/AboutElements/DescriptionContainer";
import CourseSchedule from "./SubComponents/AboutElements/CourseSchedule";
import SkillsSection from "./SubComponents/AboutElements/SkillsSection";
import Prerequisites from "./SubComponents/AboutElements/Prerequisites";
import StudentCourseReview from "./SubComponents/AboutElements/StudentCourseReview";

function AboutCourse(props) {
  const classes = useStyles();

  const {
    whatYouWillLearn,
    skills,
    prerequisites,
    reviews,
    schedule,
    courseLongDescription,
  } = props.about;

  return (
    <Box className={classes.root}>
      <Box className={classes.outterContainer}>
        <Container className={classes.innerContainer} disableGutters>
          <LearningInfo info={whatYouWillLearn} />
          <SkillsSection skillsInfo={skills} />
          <DescriptionContainer description={courseLongDescription} />
          <CourseSchedule schedule={schedule} />
          <Prerequisites prerequisitesInfo={prerequisites} />
          <StudentCourseReview reviewInfo={reviews} />
        </Container>
        <Box className={classes.container}>
          <CourseIncludes />
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    background: "#FCFCFC",
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  },
  outterContainer: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  innerContainer: {
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
}));

export default AboutCourse;
