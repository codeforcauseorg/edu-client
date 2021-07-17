import { Box, Card, makeStyles } from "@material-ui/core";
import React from "react";

function StatsCardSection() {
  const classes = useStyles();
  return (
    <Box className={classes.cardContainer}>
      {[1, 2, 3].map((item, index) => (
        <Card className={classes.mediaCard} key={index} />
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
    height: 150,
    width: 300,
    boxShadow: "0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)",
    marginRight: theme.spacing(4),
  },
}));

export default StatsCardSection;
