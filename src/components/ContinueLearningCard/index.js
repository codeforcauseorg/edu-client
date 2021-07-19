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
          <Typography gutterBottom variant="h6" noWrap component="h4" className={classes.chapter}>
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
    position: "relative",
    top: 0,
    boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.10)",
    transition: "0.5s",
    cursor: "pointer",
    marginTop: theme.spacing(3),
    maxWidth: 370,
    marginRight: "25px",
    borderRadius: "5px",
    flex: "0 0 auto",
    "&:hover": {
      boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.25)",
      top: "-10px",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 325,
      marginRight: "10px",
    },
  },
  title: {
    paddingRight: theme.spacing(2),
  },
  cardActions: {
    alignItems: "center",
    paddingBottom: theme.spacing(2),
  },
  media: {
    height: 100,
    transition: "0.5s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  chapter: {
    padding: ".5rem .75rem",
    background: "#e8f0f8",
  },
  cardContent: {
    padding: 0,
  },
}));

export default ContinueLearningCard;
