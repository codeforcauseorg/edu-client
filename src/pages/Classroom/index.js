import { Box, Container, List, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import useSWR from "swr";
import CardContainer from "../../components/cardContainer/cardContainer";
import AssignmentList from "../../components/ClassroomComponent/AssignmentList";
import MediaCard from "../../components/CourseMediaCard/MediaCard";
import SkeletonMediaCard from "../../components/skeleton/SkeletonMediaCard";
import {
  COURSE_DETAIL_ENDPOINT,
  USER_ENROLLED_COURSE_ENDPOINT,
} from "../../constants/apiEndpoints";
import { loadData } from "../../services/apiService";

function Classroom() {
  const classes = useStyles();

  const { data: courseDetailData } = useSWR(COURSE_DETAIL_ENDPOINT + "all", loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const { data: userEnrolledCourses } = useSWR(USER_ENROLLED_COURSE_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const userCourses = courseDetailData?.filter(
    (course) => course?.id === userEnrolledCourses?.courseId
  );

  console.log(userCourses);

  return (
    <Container className={classes.root}>
      <Box className={classes.container}>
        <Typography className={classes.title} variant="h1">
          Classroom
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="h3">{`Enrolled Courses (${userCourses?.length})`}</Typography>
        <CardContainer>
          {userCourses === undefined
            ? [1, 2, 3, 4].map((index) => <SkeletonMediaCard key={index} />)
            : userCourses.map((items, index) => (
                <MediaCard key={index} props={items} enrolledCourse={true} />
              ))}
        </CardContainer>
        <Typography variant="h3">Assignments</Typography>
        <List container spacing={4}>
          {userCourses === undefined
            ? [1, 2, 3, 4].map((index) => <Box key={index} />)
            : userCourses.map((items, index) => <AssignmentList key={index} props={items} />)}
        </List>
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    background: "linear-gradient(90deg, #5848EA 0%, #9549EB 100%)",
    height: "35vh",
    borderRadius: "15px",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      height: "25vh",
    },
    [theme.breakpoints.down("lg")]: {
      height: "20vh",
    },
  },
  root: {
    maxWidth: "75%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "95%",
    },
  },
  title: {
    color: "#fff",
    padding: theme.spacing(2, 4),
  },
}));

export default Classroom;
