import { makeStyles, Box, Grid } from "@material-ui/core";
import ActivityCard from "./SubComponents/ActivityCard";
import React from "react";
import SecondaryActivityCard from "./SubComponents/SecondaryActivityCard";
import { useHistory } from "react-router";

const listItems = [
  {
    title: "Certificates    ",
    subtitle: "View all your certificates",
    image: "illustrations/Character Boy 1 1.svg",
    isButton: false,
    onClick: () => console.log(""),
  },
  {
    title: "Ask Doubts",
    subtitle: "Clear all your doubts",
    image: "illustrations/Thinking 1 1.svg",
    isButton: true,
    onClick: () => console.log(""),
  },
];

function Activity() {
  const classes = useStyles();
  const history = useHistory();

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
      onClick: () => history.push("/classroom"),
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

  return (
    <Box className={classes.root}>
      <Grid container spacing={4} align="center">
        {activityCardElements.map((items, index) => (
          <ActivityCard key={index} props={items} />
        ))}
      </Grid>
      <Box className={classes.container}>
        <Box className={classes.certificates}>
          <SecondaryActivityCard props={listItems[0]} />
        </Box>
        <Box className={classes.askDoubts}>
          <SecondaryActivityCard props={listItems[1]} />
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  container: {
    display: "flex",
    marginTop: theme.spacing(25),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginTop: theme.spacing(10),
    },
  },
  certificates: {
    marginRight: theme.spacing(4),
    flex: 5,
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  askDoubts: {
    marginLeft: theme.spacing(4),
    flex: 5,
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(0),
    },
  },
}));

export default Activity;
