import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player/lazy";
import { useHistory } from "react-router";

function VideoCard(props) {
  const classes = useStyles();
  const { videoInfo } = props;
  const { courseTrailerUrl, crossPrice, originalPrice, courseThumbnail } = videoInfo;
  const history = useHistory();

  return (
    <Box className={classes.videoContainer}>
      <ReactPlayer
        controls={true}
        light={courseThumbnail}
        url={courseTrailerUrl}
        volume={1}
        height={200}
        width="100%"
      />
      <Box mt={2} className={classes.container}>
        <Box mb={2} className={classes.priceContainer}>
          <Typography variant="h2" className={classes.price}>
            {originalPrice}
          </Typography>
          <Typography variant="h4" className={classes.originalPrice}>
            {crossPrice}
          </Typography>
        </Box>
        <Button className={classes.button} onClick={() => history.push("/checkout")}>
          Buy Now
        </Button>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    background: theme.palette.primary.main,
    padding: theme.spacing(2),
    color: "#fff",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  videoContainer: {
    flex: 1.5,
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(5),
    borderRadius: "5px",
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(5),
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },
  originalPrice: {
    textDecoration: " line-through",
    color: theme.palette.text.secondary,
  },
  applyCoupon: {
    marginTop: theme.spacing(2),
    textTransform: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      fontWeight: 700,
      background: "#fff",
    },
  },
}));
export default VideoCard;
