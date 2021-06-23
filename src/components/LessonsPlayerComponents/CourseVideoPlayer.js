import React from "react";
import ReactPlayer from "react-player";
import { makeStyles, Box } from "@material-ui/core";

function CourseVideoPlayer() {
  const classes = useStyles();

  return (
    <Box className={classes.videoContainer}>
      <ReactPlayer
        className={classes.reactPlayer}
        url="https://firebasestorage.googleapis.com/v0/b/codeforcauseorg.appspot.com/o/course%2Fzoom_0.mp4?alt=media&token=01f3ed1e-8d39-4fde-b945-f3bfe677b6df"
        height="500px"
        width="100%"
      />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    flex: 5,
    borderRadius: "5px",
    height: "100%",
    backgroundColor: "#000",
  },
  reactPlayer: {},
}));

export default CourseVideoPlayer;
