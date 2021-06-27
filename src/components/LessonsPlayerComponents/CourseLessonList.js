import React from "react";
import { makeStyles, Box, AppBar, Toolbar, Typography, List, Hidden } from "@material-ui/core";
import VideoContentList from "./SubComponents/VideoContentList";

function CourseLessonList() {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperContainer}>
      <Box className={classes.listContainer}>
        <Hidden lgDown>
          <AppBar position="sticky" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h5">Course Content</Typography>
            </Toolbar>
          </AppBar>
        </Hidden>
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
    [theme.breakpoints.down("lg")]: {
      marginLeft: theme.spacing(0),
      height: "100%",
    },
  },
  listContainer: {
    flex: 2,
    height: "90vh",
    marginLeft: theme.spacing(3),
    position: "fixed",
    overflowX: "scroll",
    width: "22%",
    scrollbarWidth: "none" /* mozilla */,
    "&::-webkit-scrollbar": {
      display: "none" /* Safari and Chrome browsers */,
    },
    [theme.breakpoints.down("lg")]: {
      position: "relative",
      width: "100%",
      height: "100%",
      marginLeft: theme.spacing(0),
    },
  },
  appBar: {
    backgroundColor: theme.palette.text.primary,
    borderRadius: "5px",
    [theme.breakpoints.down("lg")]: {
      borderRadius: "0px",
    },
  },
}));

export default CourseLessonList;
