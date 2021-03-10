import { Box, Typography } from "@material-ui/core";
import React from "react";
import ScheduleDetails from "./scheduleDetails";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  heading: {
    margin: theme.spacing(2, 0),
  },
}));

const Schedule = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box mb={4} ml={4}>
        <Typography variant="h5" align="left" className={classes.heading}>
          <b>Course Schedule</b>
        </Typography>
        <Typography variant="h6" align="left">
          <b>35 Lectures | 45 hours of learning</b>
        </Typography>
      </Box>
      <Box>
        <ScheduleDetails
          chapter="1"
          duration="1 hr 10 min"
          heading="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est."
          details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est."
          premier="Priemere TBD"
          panel="panel1"
        />
        <ScheduleDetails
          chapter="2"
          duration="1 hr 10 min"
          heading="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est."
          details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est."
          premier="Priemere TBD"
          panel="panel2"
        />
        <ScheduleDetails
          chapter="3"
          duration="1 hr 10 min"
          heading="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est."
          details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est."
          premier="Priemere TBD"
          panel="panel3"
        />
        <ScheduleDetails
          chapter="4"
          duration="1 hr 10 min"
          heading="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est."
          details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum amet doloremque unde aperiam qui, quae tempora veniam est."
          premier="Priemere TBD"
          panel="panel4"
        />
      </Box>
    </div>
  );
};

export default Schedule;
