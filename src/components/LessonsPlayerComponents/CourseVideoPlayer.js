import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import ActionBar from "./ActionBar";
import { Player } from "video-react";
import NotesSection from "./NotesSection";

function CourseVideoPlayer() {
  const classes = useStyles();

  return (
    <Box className={classes.videoContainer}>
      <Player className={classes.player}>
        <source src="https://firebasestorage.googleapis.com/v0/b/codeforcauseorg.appspot.com/o/course%2Fzoom_0.mp4?alt=media&token=01f3ed1e-8d39-4fde-b945-f3bfe677b6df" />
      </Player>
      <ActionBar />
      <NotesSection />
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
      left: "48%",
      lineHeight: "60px",
      top: "42%",
    },
  },
}));

export default CourseVideoPlayer;
