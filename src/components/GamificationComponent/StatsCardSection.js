import { Avatar, Box, Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const cardElement = [
  {
    title: "Rank",
    icon: "",
    subtitle: "Leaderboard Position",
    value: "05",
  },
  {
    title: "Score",
    icon: "",
    subtitle: "Reward Points",
    value: "300",
  },
  {
    title: "Certificates",
    icon: "",
    subtitle: "Course Achevement",
    value: "04",
  },
  {
    title: "Total Learnings",
    icon: "",
    subtitle: "Duration",
    value: "30 min",
  },
];

function StatsCardSection() {
  const classes = useStyles();
  return (
    <Box className={classes.cardContainer}>
      {cardElement.map((item, index) => (
        <Card className={classes.mediaCard} key={index}>
          <Box className={classes.headerTitle}>
            <Avatar className={classes.avatar}></Avatar>
            <Typography variant="h6">{item.title}</Typography>
          </Box>
          <Box className={classes.container}>
            <Typography variant="h1">{item.value}</Typography>
            <Typography variant="h5" className={classes.subtitle}>
              {item.subtitle}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  cardContainer: {
    display: "flex",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  mediaCard: {
    width: 300,
    boxShadow: "0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)",
    marginRight: theme.spacing(4),
  },
  avatar: {
    background: "#8496E8",
    marginRight: theme.spacing(2),
  },
  headerTitle: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  container: {
    margin: theme.spacing(2),
  },
  subtitle: {
    marginTop: theme.spacing(1),
  },
}));

export default StatsCardSection;
