import { makeStyles, Grid, Card, CardContent, Typography, Link } from "@material-ui/core";
import React from "react";

function ActivityCard({ props }) {
  const classes = useStyles();
  const { title, icon, subtitle, description } = props;

  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <img src={icon} className={classes.image} />
          <Typography variant="h6" color="textSecondary" gutterBottom className={classes.title}>
            {title}
          </Typography>
          <Typography variant="h4" className={classes.margin} gutterBottom>
            {subtitle}
          </Typography>
          <Typography variant="subtitle1" className={classes.margin} gutterBottom>
            {description}
          </Typography>
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
  },
  title: {
    textTransform: "uppercase",
  },
  cardContent: {
    padding: theme.spacing(4),
    position: "relative",
  },
  margin: {
    marginTop: theme.spacing(2),
    cursor: "pointer",
  },
  image: {
    position: "absolute",
    right: -20,
    bottom: 0,
    height: 120,
  },
}));

export default ActivityCard;
