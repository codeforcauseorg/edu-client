import { Avatar, Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: 130,
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#4299E9",
    height: 30,
    width: 30,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  cardTitle: {
    paddingRight: theme.spacing(0.5),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
}));
function ContestCategories() {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <Avatar className={classes.avatar}>
        <Typography>L</Typography>
      </Avatar>
      <Typography className={classes.cardTitle}>Long Challenges</Typography>
    </Card>
  );
}

export default ContestCategories;
