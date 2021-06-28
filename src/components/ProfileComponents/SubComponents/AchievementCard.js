import { makeStyles, Grid, Card, CardContent, Typography, Box } from "@material-ui/core";
import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

function AchievementCard({ props }) {
  const classes = useStyles();
  const { status, courseName, type, content, duration, badgeIcon } = props;

  return (
    <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <img src={badgeIcon} className={classes.image} />
          <Typography variant="h6" gutterBottom component="span">
            {status}
          </Typography>
          <Typography
            variant="h6"
            className={classes.extraMargin}
            color="textSecondary"
            component="span"
            gutterBottom
          >
            {courseName}
          </Typography>
          <Typography variant="body2" className={classes.marginTop} gutterBottom>
            {type}
          </Typography>
          <Box className={classes.flexContainer}>
            <Box className={classes.flexContainer}>
              <PlayCircleOutlineIcon />
              <Typography variant="subtitle1" gutterBottom className={classes.extraMargin}>
                {content}
              </Typography>
            </Box>
            <Box className={classes.flexContainer}>
              <AccessTimeIcon />
              <Typography variant="subtitle1" gutterBottom className={classes.extraMargin}>
                {duration}
              </Typography>
            </Box>
          </Box>
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
  cardContent: {
    padding: theme.spacing(4),
    position: "relative",
  },
  flexContainer: {
    display: "flex",
    marginTop: theme.spacing(1),
  },
  extraMargin: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
  image: {
    position: "absolute",
    top: 0,
    right: 10,
    height: 80,
    [theme.breakpoints.down("sm")]: {
      height: 50,
    },
  },
}));

export default AchievementCard;
