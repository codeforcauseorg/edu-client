import { Card, CardContent, CardMedia, Grid, makeStyles } from "@material-ui/core";
import React from "react";

function TeamCard({ image }) {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={5} md={3} lg={2}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} />
        <CardContent></CardContent>
      </Card>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.08)",
    transition: "1s",
    "&:hover": {
      boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.25)",
    },
    borderRadius: "10px",
  },
  media: {
    height: 150,
    // width: 180,
    margin: theme.spacing(1),
  },
}));

export default TeamCard;
