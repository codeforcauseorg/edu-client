import { makeStyles, Grid, Card, CardContent, Typography, Link, Hidden } from "@material-ui/core";
import React from "react";

function ActivityCard({ props }) {
  const classes = useStyles();
  const { title, icon, subtitle, description, onClick } = props;

  return (
    <Grid item xs={12} sm={6} md={6} lg={6} xl={4} className={classes.grid}>
      <Card className={classes.card} onClick={onClick}>
        <CardContent className={classes.cardContent}>
          <img src={icon} className={classes.image} />
          <Typography variant="h6" color="textSecondary" gutterBottom className={classes.title}>
            {title}
          </Typography>
          <Typography variant="h4" className={classes.margin} gutterBottom>
            {subtitle}
          </Typography>
          <Hidden smDown>
            <Typography variant="subtitle1" className={classes.description} gutterBottom>
              {description}
            </Typography>
          </Hidden>
          <Typography variant="body2" className={classes.margin} gutterBottom>
            <Link>View</Link>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.25)",
    textAlign: "left",
    cursor: "pointer",
  },
  title: {
    textTransform: "uppercase",
  },
  cardContent: {
    padding: theme.spacing(4),
    position: "relative",
    zIndex: 1,
  },
  margin: {
    marginTop: theme.spacing(2),
  },
  image: {
    position: "absolute",
    right: -20,
    bottom: 0,
    height: 120,
    zIndex: -1,
    [theme.breakpoints.down("sm")]: {
      height: 100,
    },
  },
}));

export default ActivityCard;
