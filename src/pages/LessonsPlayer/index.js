import { makeStyles, Box, Container, Hidden, CircularProgress } from "@material-ui/core";
import React from "react";
import CourseVideoPlayer from "../../components/LessonsPlayerComponents/CourseVideoPlayer";
import CourseLessonList from "../../components/LessonsPlayerComponents/CourseLessonList";
import { useParams } from "react-router";
import useSWR from "swr";
import { loadData } from "../../services/apiService";
import { COURSE_DETAIL_ENDPOINT, GET_DOUBT_ENDPOINT } from "../../constants/apiEndpoints";

function LessonsPlayer() {
  const classes = useStyles();

  const { id } = useParams();

  const { data: courseDetails } = useSWR(COURSE_DETAIL_ENDPOINT + id, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 100000,
  });

  const { data } = useSWR(GET_DOUBT_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const courseDoubtID = courseDetails?.doubts?.map((items) => items._id);

  const courseDoubt = data?.filter((doubt) => courseDoubtID?.includes(doubt._id));

  return (
    <>
      {[courseDetails, data].includes(undefined) ? (
        <Box className={classes.loadingContainer}>
          <CircularProgress size={50} />
        </Box>
      ) : (
        <Box className={classes.root}>
          <Container className={classes.heroContainer} disableGutters>
            <CourseVideoPlayer courseInfo={courseDetails} courseDoubt={courseDoubt} />
            <Hidden lgDown>
              <CourseLessonList courseInfo={courseDetails} />
            </Hidden>
          </Container>
        </Box>
      )}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    maxWidth: "85%",
    height: "100%",
    marginTop: theme.spacing(2),
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "block",
      maxWidth: "100%",
      marginTop: theme.spacing(7.5),
    },
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(20),
  },
}));

export default LessonsPlayer;
