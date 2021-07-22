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
    // courseLevel,
    // tags,
    schedule,
    // assignments,
    // mentor,
    // active,
    // name,
    // price,
    // coupons,
    // video_num,
    // duration,
    // start_date,
    // end_date,
    // sharable_link,
    // courseDetails,
    // courseThumbnail,
    // courseTrailerUrl,
    // id,
  } = props.about;

  return (
    <Box className={classes.root}>
      <Box className={classes.outterContainer}>
        <Container className={classes.innerContainer} disableGutters>
          <LearningInfo info={whatYouWillLearn} />
          <SkillsSection skillsInfo={skills} />
          <DescriptionContainer description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
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
