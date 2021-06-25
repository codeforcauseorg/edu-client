import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { Player } from "video-react";
import TabComponents from "./TabComponents";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

function CourseVideoPlayer() {
  const classes = useStyles();

  return (
    <Box className={classes.videoContainer}>
      <Player className={classes.player}>
        <source src="https://firebasestorage.googleapis.com/v0/b/codeforcauseorg.appspot.com/o/course%2Fzoom_0.mp4?alt=media&token=01f3ed1e-8d39-4fde-b945-f3bfe677b6df" />
      </Player>
      <Box className={classes.videoInfoContainer}>
        <Typography variant="h3" color="textPrimary" gutterBottom>
          Flull Stack Development Course by code for Cause
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Anuj Garg & Ganga Chaturvedi{" "}
        </Typography>
        <Box className={classes.lessons}>
          <PlayCircleOutlineIcon className={classes.playIcon} />
          <Typography variant="subtitle1">12 / 35 lessons</Typography>
        </Box>
      </Box>

      <TabComponents />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    flex: 5,
    borderRadius: "5px",
    height: "100%",
  },
  player: {
    "& .video-react-big-play-button": {
      borderRadius: "30px",
      border: "none",
      height: 60,
      width: 60,
      left: "40%",
      lineHeight: "60px",
      top: "42%",
      [theme.breakpoints.up("lg")]: {
        left: "45%",
      },
    },
  },
  lessons: {
    display: "flex",
    alignItems: "center",
  },
  playIcon: {
    marginRight: theme.spacing(2),
  },
  videoInfoContainer: {
    marginTop: theme.spacing(4),
    matginBottom: theme.spacing(4),
    [theme.breakpoints.down("lg")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  },
}));

export default CourseVideoPlayer;
