import { Box, Typography } from "@material-ui/core";
import React from "react";
import ScheduleDetails from "./scheduleDetails";
import { makeStyles } from "@material-ui/core/styles";
import courseDetail from "../../data/courseDetail.json";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    margin: theme.spacing(2, 0),
  },
}));

const scheduleData = courseDetail[0].scheduleSection;

const Schedule = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box mb={4}>
        <Typography variant="h2" align="left" className={classes.heading}>
          <b>Course Schedule</b>
        </Typography>
        <Typography variant="h5" align="left">
          <b>35 Lectures | 45 hours of learning</b>
        </Typography>
      </Box>
      <Box>
        {scheduleData.map((chapter) => (
          <ScheduleDetails
            key={chapter.chapter}
            chapter={chapter.chapter}
            duration={chapter.duration}
            heading={chapter.heading}
            details={chapter.details}
            premier={chapter.premier}
            panel={chapter.panel}
          />
        ))}
      </Box>
    </div>
  );
};

export default Schedule;
