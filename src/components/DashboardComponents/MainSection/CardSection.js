import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

function CardSection({ props }) {
  const classes = useStyles();
  const { title, banner } = props;

  return (
    <Grid item className={classes.root} xs={12} md={4} lg={4}>
      <Card className={classes.card}>
        <CardMedia image={banner} className={classes.cardMedia}>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
        </CardMedia>
        <CardContent></CardContent>
      </Card>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    cursor: "pointer",
  },
  cardMedia: {
    height: 160,
  },
  title: {
    color: "#fff",
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 500,
    boxShadow: "0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)",
  },
}));

export default CardSection;
