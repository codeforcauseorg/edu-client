import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginLeft: "-8px",
    marginRight: "25px",
    minWidth: 300,
    boxShadow: "0px 0px 5px grey",
  },
  cardmedia: {
    position: "relative",
    height: 150,
  },
  playarrowicon: {
    position: "absolute",
    color: "#fff",
    height: 30,
    width: 30,
    left: "45%",
    bottom: "40%",
  },
  progressbar: {
    padding: 0,
    marginBottom: theme.spacing(1),
  },
  coursetitle: {
    fontWeight: 500,
  },
}));
function CourseMediaCard({
  chapterNumber,
  chapterTitle,
  courseName,
  bannerImage,
  completedDuration,
  totalDuration,
  progressValue,
}) {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.cardmedia} component="div" image={bannerImage}>
          <PlayCircleOutlineIcon className={classes.playarrowicon} />
        </CardMedia>
        <CardContent>
          <LinearProgress
            variant="determinate"
            value={progressValue}
            className={classes.progressbar}
          />
          <Typography gutterBottom variant="subtitle2">
            Chapter {chapterNumber} : {chapterTitle}
          </Typography>
          <Typography variant="h3" color="#000" component="p" className={classes.coursetitle}>
            {courseName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="subtitle2">
          Duration{" "}
          <Typography variant="subtitle2" component="span" style={{ fontWeight: "bold" }}>
            {completedDuration}{" "}
          </Typography>
          learned out of {totalDuration}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default CourseMediaCard;
