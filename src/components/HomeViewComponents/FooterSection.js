import {
  Box,
  Container,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Switch,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body1" align="center">
      All Rights Reserved by Code for Cause {new Date().getFullYear()}
    </Typography>
  );
}
const iconList = [
  "assets/icon/social icons/twitter.svg",
  "assets/icon/social icons/linkedIn.svg",
  "assets/icon/social icons/github.svg",
  "assets/icon/social icons/youtube_icon.svg",
];

const aboutItems = [
  {
    link: "/privacy",
    title: "Privacy Policy",
  },
  {
    link: "/terms-and-conditions",
    title: "Terms & Conditions",
  },
  {
    link: "/ContactUs",
    title: "Support",
  },
  {
    link: "/job-openings",
    title: "Career",
  },
  {
    link: "/faq",
    title: "FAQs",
  },
  {
    link: "/about",
    title: "About Us",
  },
];

function FooterSection() {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const handleChange = (event) => {
    setState(!state);
  };

  return (
    <Box className={classes.root}>
      <Container className={classes.footerContainer}>
        <Box pt={5} className={classes.darkModeSwitcher}>
          <Switch onChange={handleChange} />
          <img className={classes.darkModeIcon} src="assets/icon/darkmodeIcon.svg" />
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h4">Code For Cause</Typography>
              <Typography variant="h5" className={classes.description}>
                We aim to provide a real world practical learning experience and keep students
                informed about the latest trends in technology, open-source and opportunities, so
                that they can keep up with the fast-paced digital world by following a pi-shaped
                learning pattern.
              </Typography>
              <Box className={classes.buttonContainer}>
                {iconList.map((items, index) => (
                  <IconButton key={index} className={classes.socialButtons}>
                    <img src={items} />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              <Typography variant="h4">Explore</Typography>
              <Box mt={3} className={classes.exploreLinks}>
                <Typography gutterBottom variant="h5">
                  Home
                </Typography>
                <Typography gutterBottom variant="h5">
                  Courses
                </Typography>
                <Typography gutterBottom variant="h5">
                  Special Offers
                </Typography>
                <Typography variant="h5">Events & Hackathons</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              <Typography variant="h4">About</Typography>
              <Box mt={3}>
                {aboutItems.map((items, i) => (
                  <Link to={items.link} key={i} className={classes.AboutLinks}>
                    <Typography gutterBottom variant="h5">
                      {items.title}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              <Typography variant="h4">Community</Typography>
              <Box mt={3} className={classes.communityLinks}>
                <Typography gutterBottom variant="h5">
                  Refer a Friend{" "}
                </Typography>
                <Typography variant="h5">Scholarship</Typography>
              </Box>
            </Box>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} md={2}>
              <Box>
                <Typography variant="h4">Download App</Typography>
                <Box mt={3}>
                  <Typography variant="h5">
                    <img
                      src="assets/icon/social icons/google_play.svg"
                      className={classes.googlePlay}
                    />
                    <img
                      src="assets/icon/social icons/appleStore.svg"
                      className={classes.appleStore}
                    />
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Hidden>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 550,
    background: theme.palette.primary.footer.background,
  },
  footerContainer: {
    maxWidth: "85%",
  },
  description: {
    marginTop: theme.spacing(3),
    lineHeight: "25px",
  },
  buttonContainer: {
    marginTop: theme.spacing(6),
  },
  socialButtons: {
    marginTop: theme.spacing(1),
    background: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    maxHeight: 40,
    maxWidth: 40,
    boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.25)",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  googlePlay: {
    cursor: "pointer",
  },
  appleStore: {
    cursor: "pointer",
  },
  darkModeSwitcher: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse",
    marginBottom: theme.spacing(10),
  },
  darkModeIcon: {
    maxHeight: 35,
    maxWidth: 35,
  },
  AboutLinks: {
    textDecoration: "none",
    color: "#000",
  },
}));

export default FooterSection;
