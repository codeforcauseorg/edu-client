import { makeStyles, Box, Container } from "@material-ui/core";
import React from "react";
import NavBar from "../../components/NavBar";
import CourseVideoPlayer from "../../components/LessonsPlayerComponents/CourseVideoPlayer";
import CourseLessonList from "../../components/LessonsPlayerComponents/CourseLessonList";

function LessonsPlayer() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Box className={classes.root}>
        <Container className={classes.heroContainer} disableGutters>
          <CourseVideoPlayer />
          <CourseLessonList />
        </Container>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    maxWidth: "85%",
    height: "100%",
    marginTop: theme.spacing(10),
    display: "flex",
  },
}));

export default LessonsPlayer;
