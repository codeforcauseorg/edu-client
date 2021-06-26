import { makeStyles, Box, Grid } from "@material-ui/core";
import ActivityCard from "./SubComponents/ActivityCard";
import React from "react";

const activityCardElements = [
  {
    title: "Doubt Forum",
    icon: "assets/icon/ActivityIcons/Chat.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
  {
    title: "Contests and Statistics ",
    icon: "assets/icon/ActivityIcons/Chart.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
  {
    title: "Classroom",
    icon: "assets/icon/ActivityIcons/Profile.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
  {
    title: "Gamification Board",
    icon: "assets/icon/ActivityIcons/Ticket Star.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
  {
    title: "Referal & Coupon Code",
    icon: "assets/icon/ActivityIcons/Discount.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
  {
    title: "Interview your friends",
    icon: "assets/icon/ActivityIcons/user_square.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
];

function Activity() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={4} justify="center">
        {activityCardElements.map((items, index) => (
          <ActivityCard key={index} props={items} />
        ))}
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
}));

export default Activity;
