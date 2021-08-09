import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player/lazy";
import { useHistory } from "react-router";

function VideoCard(props) {
  const classes = useStyles();

  const { videoInfo } = props;

  const { courseTrailerUrl, crossPrice, originalPrice, courseThumbnail, isUpcoming } = videoInfo;

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
            ₹{originalPrice}
          </Typography>
          <Typography variant="h4" className={classes.originalPrice}>
            ₹{crossPrice}
          </Typography>
        </Box>
        {!isUpcoming === true ? (
          <Button className={classes.button} onClick={() => history.push("/checkout")}>
            <Typography variant="h6"> Enroll Now</Typography>
          </Button>
        ) : (
          <Button className={classes.button}>
            <Typography variant="h6">Upcoming</Typography>
          </Button>
        )}
        <Button className={classes.cartButton}>
          <Typography>Add to Cart</Typography>
        </Button>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#fff",
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
    "&:hover": {
      background: "#fff",
    },
  },
  cartButton: {
    border: "2px solid #ffffff",
    color: "#ffffff",
    textTransform: "none",
    marginTop: theme.spacing(1.5),
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1),
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
    color: "#fff",
    marginRight: theme.spacing(2),
  },
  originalPrice: {
    textDecoration: " line-through",
    color: "#fff",
    opacity: 0.6,
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
