import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player/lazy";

function VideoCard() {
  const classes = useStyles();
  return (
    <Box className={classes.videoContainer}>
      <ReactPlayer
        className={classes.reactPlayer}
        controls={true}
        light="https://images.unsplash.com/photo-1423530990185-af7dde1155fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        volume={1}
        height="55%"
        width="100%"
      />
      <Box mt={2} className={classes.container}>
        <Button className={classes.button}>Buy Now</Button>
      </Box>
      <Box mt={2} className={classes.priceContainer}>
        <Typography variant="h2" className={classes.price}>
          ₹1200
        </Typography>
        <Typography variant="h4" className={classes.originalPrice}>
          ₹6000
        </Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    background: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  videoContainer: {
    flex: 1.5,
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(5),
    marginBottom: theme.spacing(5),
    borderRadius: "5px",
    margin: theme.spacing(4),
    boxShadow: "none",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  price: {
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(2),
  },
  originalPrice: {
    textDecoration: " line-through",
    color: theme.palette.text.secondary,
  },
}));
export default VideoCard;
