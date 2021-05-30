import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

function ContinueLearningCard({
  title,
  image,
  chapterTitle,
  courseTitle,
  completedLessons,
  totalLessons,
  completedPercentage,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} title={title} image={image} />
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant="subtitle"
            noWrap
            component="h4"
            className={classes.chapter}
          >
            {chapterTitle}
          </Typography>
          <LinearProgress variant="determinate" value={completedPercentage} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box className={classes.cardActions}>
          <Typography variant="h6" className={classes.title}>
            {courseTitle}
          </Typography>
          <Box>
            <Typography variant="subtitle2">
              {completedLessons}/{totalLessons} lessons
            </Typography>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.05)",
    transition: "1s",
    cursor: "pointer",
    marginTop: theme.spacing(3),
    minWidth: 350,
    marginRight: "25px",
    borderRadius: "10px",
    "&:hover": {
      boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.10)",
      transform: "scale(1.035, 1.035)",
    },
    [theme.breakpoints.down("md")]: {
      minWidth: 320,
      marginRight: "10px",
    },
  },
  title: {
    paddingRight: theme.spacing(2),
  },
  cardActions: {
    display: "flex",
    alignItems: "center",
  },
  media: {
    height: 100,
    transition: "1s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.020)",
    },
  },
  chapter: {
    padding: ".5rem .75rem",
    background: "#e7e7e7",
  },
  cardContent: {
    padding: 0,
  },
}));

export default ContinueLearningCard;
