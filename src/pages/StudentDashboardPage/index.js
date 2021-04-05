import { AppBar, Container, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import DashboardHeader from "./DashboardComponents/DashboardHeader";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ProgressCourse from "./DashboardComponents/ProgressCourse";
import CourseAssignments from "./DashboardComponents/CourseAssignments";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  title: {
    flexGrow: 1,
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    background: "#50407C",
  },
}));
function StudentDashboard() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.backButton} color="inherit" aria-label="menu">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Dashboard
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DashboardHeader />
      <ProgressCourse />
      <CourseAssignments />
    </Container>
  );
}

export default StudentDashboard;
