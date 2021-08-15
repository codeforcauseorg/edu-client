import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import useSWR from "swr";
import CardContainer from "../../components/cardContainer/cardContainer";
import MediaCard from "../../components/CourseMediaCard/MediaCard";
import SkeletonMediaCard from "../../components/skeleton/SkeletonMediaCard";
import {
  ALL_COURSE_CARD_ENDPOINT,
  USER_ENROLLED_COURSE_ENDPOINT,
} from "../../constants/apiEndpoints";
import { loadData } from "../../services/apiService";

function Classroom() {
  const classes = useStyles();

  const { data: enrolledCourses } = useSWR(USER_ENROLLED_COURSE_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const { data: course } = useSWR(ALL_COURSE_CARD_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  console.log(enrolledCourses);

  return (
    <Container className={classes.root}>
      <Box className={classes.container}>
        <Typography className={classes.title} variant="h1">
          Classroom
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="h3">Enrolled Courses (2)</Typography>
        <CardContainer>
          {course === undefined
            ? [1, 2, 3, 4].map((index) => <SkeletonMediaCard key={index} />)
            : course.map((items, index) => (
                <MediaCard key={index} props={items} enrolledCourse={true} />
              ))}
        </CardContainer>
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    background: "linear-gradient(90deg, #5848EA 0%, #9549EB 100%)",
    height: "35vh",
    borderRadius: "15px",
  },
  root: {
    maxWidth: "75%",
  },
  title: {
    color: "#fff",
    padding: theme.spacing(2, 4),
  },
}));

export default Classroom;
