import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CardContainer from "../../cardContainer/cardContainer";
import CourseEnrolledCard from "../SubComponents/CourseEnrolledCard";

function EnrolledCourses() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Enrolled Courses
      </Typography>
      <CardContainer>
        {[1, 2, 3, 4, 5, 6].map((items, index) => (
          <CourseEnrolledCard key={index} />
        ))}
      </CardContainer>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
  },
  title: {
    textTransform: "uppercase",
    marginBottom: theme.spacing(5),
  },
}));

export default EnrolledCourses;
