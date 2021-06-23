import React from "react";
import { makeStyles, Box, AppBar, Toolbar, Typography, List } from "@material-ui/core";
import VideoContentList from "./SubComponents/VideoContentList";

function CourseLessonList() {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperContainer}>
      <Box className={classes.ListContainer}>
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5">Course Content</Typography>
          </Toolbar>
        </AppBar>
        <List>
          {[1, 2, 3, 4].map((items, index) => (
            <VideoContentList key={index} props={items} index={index + 1} />
          ))}
        </List>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    flex: 2,
    height: "90vh",
    marginLeft: theme.spacing(3),
  },
  ListContainer: {
    flex: 2,
    height: "90vh",
    marginLeft: theme.spacing(3),
    position: "fixed",
    overflowX: "scroll",
    scrollbarWidth: "none" /* mozilla */,
    "&::-webkit-scrollbar": {
      display: "none" /* Safari and Chrome browsers */,
    },
  },
  appBar: {
    backgroundColor: theme.palette.text.primary,
    borderRadius: "5px",
  },
  courseTitle: {
    fontWeight: 600,
  },
  listItem: {
    marginBottom: theme.spacing(2),
    borderRadius: "5px",
  },
}));

export default CourseLessonList;
