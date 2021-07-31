import { Avatar, Box, Button, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

function MentorHeroSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container className={classes.wrapper}>
        <Avatar
          src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fG1lbnRvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          className={classes.avatar}
        />
        <Box className={classes.container}>
          <Typography variant="h2">Adarsh kumar Singh</Typography>
          <Box className={classes.socialIconsContainer}>
            {[1, 2, 3].map((items, index) => (
              <Button className={classes.socialIcons} key={index}>
                {" "}
                <img src="assets/icon/social icons/linkedIn.svg" />
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
    background: "linear-gradient(97.46deg, #3499FF -62.66%, #3A3985 157.91%)",
  },
  wrapper: {
    maxWidth: "85%",
    height: "100%",
    padding: theme.spacing(4, 0),
    display: "flex",
    alignItems: "center",
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
}));

export default MentorHeroSection;
