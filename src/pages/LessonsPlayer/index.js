import { makeStyles, Box, Container, Hidden } from "@material-ui/core";
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
          <Hidden lgDown>
            <CourseLessonList />
          </Hidden>
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
    [theme.breakpoints.down("md")]: {
      display: "block",
      maxWidth: "100%",
      marginTop: theme.spacing(7.5),
    },
  },
}));

export default LessonsPlayer;
