import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import {
  PlayCircleFilled,
  Headset,
  Code,
  ThumbUpOutlined,
  CardMembershipOutlined,
} from "@material-ui/icons";

import React from "react";

const cardItem = [
  {
    icon: PlayCircleFilled,
    title: "  Intutive & Detailed Explanations",
  },
  {
    icon: Headset,
    title: "HD Videos + Crystal Clear Audio",
  },
  {
    icon: Code,
    title: "Practice Exercises, Real Time Feedback",
  },
  {
    icon: ThumbUpOutlined,
    title: "Lifetime Access, Pocket Friendly",
  },
  {
    icon: CardMembershipOutlined,
    title: "Completion Certificate",
  },
];

function Banner() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Typography variant="h1" className={classes.title}>
          Quality Education Happens Here
        </Typography>
        <Typography variant="h3" className={classes.subtitle}>
          With over 100+ Professional Course for your career
        </Typography>
      </Box>
      <Container className={classes.infoContainer}>
        <Grid container justify="center" spacing={4}>
          {cardItem.map((items, index) => (
            <Grid key={index} item xs={12} sm={6} md={6} lg={2}>
              <Box mt={4}>
                <items.icon className={classes.icon} />
                <Typography variant="h5" className={classes.cardTitle}>
                  {items.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    background: "#5848EA",
  },
  title: {
    color: "#fff",
    paddingTop: theme.spacing(4),
  },
  subtitle: {
    color: "#fff",
    paddingTop: theme.spacing(2),
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    color: "#fff",
    height: 60,
    width: 60,
  },
  infoContainer: {
    textAlign: "center",
    maxWidth: "85%",
    marginTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardTitle: {
    marginTop: theme.spacing(2),
    color: "#fff",
  },
}));

export default Banner;
