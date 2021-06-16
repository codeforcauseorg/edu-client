import React from "react";
import { Box, Typography, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ScheduleList from "./ScheduleList";

function CourseSchedule() {
  const classes = useStyles();

  return (
    <Box mt={8}>
      <Typography variant="h2" gutterBottom>
        Course Schedule
      </Typography>
      <Typography variant="subtitle1">12 sections • 111 lectures • 14h 25m total length</Typography>
      <Box className={classes.scheduleContainer}>
        <List>
          {[1, 2, 3].map((items, index) => (
            <ScheduleList key={index} props={items} />
          ))}
        </List>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  scheduleContainer: {
    width: "80%",
  },
  listItem: {
    border: `2px dotted ${theme.palette.text.secondary}`,
    marginBottom: theme.spacing(2),
  },
}));

export default CourseSchedule;
