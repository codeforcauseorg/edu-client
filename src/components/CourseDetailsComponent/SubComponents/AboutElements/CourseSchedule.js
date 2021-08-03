import React from "react";
import { Box, Typography, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ScheduleList from "./ScheduleList";

function CourseSchedule({ schedule }) {
  const classes = useStyles();

  return (
    <Box mt={8}>
      <Typography variant="h2" className={classes.title}>
        Course Schedule
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        24 sections • 4 lectures • 11 h 24 min total length
      </Typography>
      <Box>
        <List>
          {schedule.map((items, index) => (
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
