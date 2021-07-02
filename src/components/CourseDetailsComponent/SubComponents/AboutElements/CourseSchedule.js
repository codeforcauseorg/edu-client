import React from "react";
import { Box, Typography, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ScheduleList from "./ScheduleList";

function CourseSchedule(props) {
  const classes = useStyles();
  const { schedule } = props;
  const { courseSections, totalNumberOfLectures, courseDuration, courseScheduleList } = schedule;

  return (
    <Box mt={8}>
      <Typography variant="h2" className={classes.title}>
        Course Schedule
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {courseSections} • {totalNumberOfLectures} lectures • {courseDuration} total length
      </Typography>
      <Box>
        <List>
          {courseScheduleList.map((items, index) => (
            <ScheduleList key={index} scheduleInfo={items} />
          ))}
        </List>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(5),
  },
}));

export default CourseSchedule;
