import React from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";

function SecondaryActivityCard({ props }) {
  const classes = useStyles();
  const { title, subtitle, image, isButton, onClick } = props;

  return (
    <Box className={classes.container}>
      <Box
        className={classes.imageContainer}
        style={{ display: "flex", justifyContent: !isButton ? "flex-start" : "flex-end" }}
      >
        <img src={image} className={classes.image} />
      </Box>

      <Box
        className={classes.infoContainer}
        style={{ display: "flex", justifyContent: !isButton ? "flex-end" : "flex-start" }}
      >
        <Box className={classes.wrapper}>
          <Typography variant="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {subtitle}
          </Typography>
          {isButton ? (
            <Button className={classes.button} onClick={onClick}>
              Ask Doubt
            </Button>
          ) : (
            <Box />
          )}
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  infoContainer: {
    marginTop: theme.spacing(4),
    backgroundColor: "#E6F3FB",
    height: 170,
    width: "100%",
    borderRadius: "15px",
  },
  image: {
    position: "absolute",
    top: -55,
  },
  wrapper: {
    padding: theme.spacing(4),
  },
  button: {
    background: theme.palette.secondary.default,
    color: "#fff",
    textTransform: "none",
    marginTop: theme.spacing(2),
    "&:hover": {
      background: theme.palette.secondary.default,
    },
  },
}));

export default SecondaryActivityCard;
