import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const onboardingItems = [
  {
    title: "Start your journey with fun learning videos",
    subtitle: "explore various learning videos based on your passion",
    image: "illustrations/onboarging1.svg",
  },
  {
    title: "Learn your passion,level up your skill",
    subtitle: "Make yourself expert your skill  by studying from mentors",
    image: "illustrations/onboarging2.svg",
  },
  {
    title: "Get your graduate with extraordinary skills",
    subtitle: "Get your certificate after finished your online class",
    image: "illustrations/onboarging3.svg",
  },
];

function OnboardingSection() {
  const classes = useStyles();

  const [x, setx] = useState(0);

  const handelNext = () => {
    console.log(x);
    x === -100 * (onboardingItems.length - 1) ? setx(0) : setx(x - 100);
  };

  const handelPrev = () => {
    x === 0 ? setx(-100 * (onboardingItems.length - 1)) : setx(x + 100);
  };

  return (
    <>
      <Box className={classes.root}>
        {onboardingItems.map((items, index) => (
          <Box
            key={index}
            my={12}
            className={classes.container}
            style={{ transform: `translateX(${x}%)` }}
          >
            <img className={classes.image} src={items.image} />
            <Typography gutterBottom variant="h2" className={classes.title}>
              {items.title}
            </Typography>
            <Typography gutterBottom variant="h5" className={classes.subtitle}>
              {items.subtitle}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box className={classes.controller}>
        <Box flexGrow={1} />
        <Box>
          <Button className={classes.arrowButton} onClick={() => handelPrev()}>
            <NavigateBeforeIcon />
          </Button>
          <Button className={classes.arrowButton} onClick={() => handelNext()}>
            <NavigateNextIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
    transition: "0.5s",
  },
  root: {
    display: "flex",
    scrollbarWidth: "none" /* mozilla */,
    "&::-webkit-scrollbar": {
      display: "none" /* Safari and Chrome browsers */,
    },
    overflow: "hidden",
    [theme.breakpoints.down("lg")]: {
      width: 550,
    },
  },
  image: {
    maxheight: 550,
    maxwidth: 550,
  },
  controller: {
    display: "flex",
    marginRight: theme.spacing(10),
  },
  title: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("lg")]: {
      textAlign: "center",
      margin: theme.spacing(2, 2),
    },
  },
  subtitle: {
    [theme.breakpoints.down("lg")]: {
      textAlign: "center",
    },
  },
  arrowButton: {
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    margin: theme.spacing(1),
    padding: theme.spacing(0.2, 0),
  },
}));

export default OnboardingSection;
