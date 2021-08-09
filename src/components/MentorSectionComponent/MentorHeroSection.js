import { Avatar, Box, Button, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Twitter, LinkedIn, Email } from "@material-ui/icons";

function MentorHeroSection({ mentorInfo }) {
  const classes = useStyles();

  const { name, email, mentorPhoto } = mentorInfo;

  const iconList = [
    {
      icon: Twitter,
      link: "Twitter link",
    },
    {
      icon: LinkedIn,
      link: "LinkedIn link",
    },
    {
      icon: Email,
      link: { email },
    },
  ];

  return (
    <Box className={classes.root}>
      <Container className={classes.wrapper}>
        <Avatar src={mentorPhoto} className={classes.avatar} />
        <Box className={classes.container}>
          <Typography variant="h2">{name}</Typography>
          <Box className={classes.socialIconsContainer}>
            {iconList.map((items, index) => (
              <Button className={classes.socialIcons} key={index}>
                <items.icon className={classes.icon} />
              </Button>
            ))}
          </Box>
          <Button className={classes.rateButton}>
            <Typography variant="h6">Rate Mentor</Typography>
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(90deg, #5848EA 0%, #9549EB 100%)",
  },
  wrapper: {
    maxWidth: "85%",
    height: "100%",
    padding: theme.spacing(4, 0),
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  avatar: {
    height: 250,
    width: 250,
  },
  container: {
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
      marginTop: theme.spacing(4),
      textAlign: "center",
    },
  },
  rateButton: {
    background: "#fff",
    boxShadow: " 0px 4px 15px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      background: "#fff",
    },
  },
  socialIcons: {
    background: "#fff",
    padding: theme.spacing(1),
    margin: theme.spacing(0, 1),
    borderRadius: "30px",
    "&:hover": {
      background: "#fff",
    },
  },
  socialIconsContainer: {
    margin: theme.spacing(4, 0),
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

export default MentorHeroSection;
