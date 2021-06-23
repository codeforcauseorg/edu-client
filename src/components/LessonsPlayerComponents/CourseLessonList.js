import React from "react";
import { makeStyles, Box, AppBar, Toolbar, Typography, List } from "@material-ui/core";
import VideoContentList from "./SubComponents/VideoContentList";

function CourseLessonList() {
  const classes = useStyles();

  return (
    <Box className={classes.ListContainer}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5">Course content</Typography>
        </Toolbar>
      </AppBar>
      <List>
        {[1, 2, 3, 4].map((items, index) => (
          <VideoContentList key={index} props={items} />
        ))}
      </List>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  ListContainer: {
    flex: 2,
    height: 800,
    marginLeft: theme.spacing(3),
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
    "&:hover": {
      background: "linear-gradient(90.28deg, #2A5EDA -20.31%, #4379FE 104.28%)",
      color: "#fff",
    },
  },
}));

export default CourseLessonList;
