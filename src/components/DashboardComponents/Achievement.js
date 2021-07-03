import React from "react";
import { makeStyles, Box, Grid } from "@material-ui/core";
import AchievementCard from "./SubComponents/AchievementCard";

const achievementCardElements = [
  {
    status: "Completed",
    courseName: "DSA Basics",
    type: "Course",
    content: "35 Content",
    duration: "4h 24min",
    badgeIcon: "assets/Badges/md1.svg",
  },
  {
    status: "Completed",
    courseName: "DSA Basics",
    type: "Course",
    content: "35 Content",
    duration: "4h 24min",
    badgeIcon: "assets/Badges/md1.svg",
  },
  {
    status: "Completed",
    courseName: "DSA Basics",
    type: "Course",
    content: "35 Content",
    duration: "4h 24min",
    badgeIcon: "assets/Badges/md2.svg",
  },
  {
    status: "Completed",
    courseName: "DSA Basics",
    type: "Course",
    content: "35 Content",
    duration: "4h 24min",
    badgeIcon: "assets/Badges/md3.svg",
  },
];

function Achievement() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={4} align="center">
        {achievementCardElements.map((items, index) => (
          <AchievementCard key={index} props={items} />
        ))}
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default Achievement;
