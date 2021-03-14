import React from "react";

import ButtonComponent from "../Button/ButtonComponent";

import { Grid, Typography, makeStyles } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ReactPlayer from "react-player/lazy";

const useStyles = makeStyles((theme) => ({
  hero: {
    padding: "0 10px",
    textAlign: "start",
  },

  navigation: {
    widht: "100%",
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "8px 10px",
  },

  heroHeading: {
    fontWeight: "700",
    [theme.breakpoints.up("md")]: {
      fontSize: "32px",
    },
  },

  heroBody: {
    margin: "1em 0",
    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
    },
  },

  details: {
    marginBottom: "16px",
    fontStyle: "italic",
  },

  accentText: {
    color: "#3949ab",
  },

  language: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    margin: "16px 0",
    fontStyle: "italic",
  },

  playerWrapper: {
    position: "relative",
    paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */,
  },

  reactPlayer: {
    position: "absolute",
    top: "0",
    left: "0",
  },

  price: {
    margin: "16px 0",
    fontWeight: "700",
  },

  button: {
    marginBottom: "16px",
    [theme.breakpoints.up("md")]: {
      marginRight: "16px",
    },
  },

  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
}));

function Hero({ title, description, startDate, duration, languages, thumbnail, videoUrl, price }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.navigation}>
        <ArrowBackIcon />
        <MoreVertIcon />
      </div>
      <Grid className={classes.hero} container justify="space-between">
        <Grid item xs={12} md={5}>
          <Typography className={classes.heroHeading} variant="h4" color="secondary" component="h4">
            {title}
          </Typography>
          <Typography className={classes.heroBody} variant="subtitle2" component="p">
            {description}
          </Typography>
          <Typography className={classes.details} variant="subtitle1" component="p">
            Classes Starting
            <span className={classes.accentText}>{startDate}</span>
          </Typography>
          <Typography className={classes.details} variant="subtitle1" component="p">
            Course Duration {duration} hrs
          </Typography>
          <Typography className={classes.language} variant="subtitle2" component="p">
            <LanguageIcon /> {languages}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.playerWrapper}>
            <ReactPlayer
              className={classes.reactPlayer}
              controls={true}
              light={thumbnail}
              url={videoUrl}
              volume={1}
              width="100%"
              height="100%"
            />
          </div>
          <Typography className={classes.price} variant="subtitle1" component="p" color="secondary">
            ₹ {price} /-
          </Typography>
          <div className={classes.buttonGroup}>
            <ButtonComponent
              className={classes.button}
              variant="contained"
              color="secondary"
              title="Buy Now"
            />
            <ButtonComponent
              className={classes.button}
              variant="outlined"
              color="secondary"
              title="Add to wishlist"
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Hero;
