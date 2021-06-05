import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

function TeamCard({ image, name }) {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={5} md={3} lg={2}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} />
        <CardContent className={classes.cardContent}>
          <Typography align="center">{name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.0)",
    transition: "1s",
    "&:hover": {
      boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.25)",
    },
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      width: 150,
    },
    [theme.breakpoints.down("lg")]: {
      width: 160,
    },
  },
  media: {
    height: 150,
  },
  cardContent: {
    minheight: 50,
  },
}));

export default TeamCard;
