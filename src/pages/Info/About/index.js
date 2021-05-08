import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Container,
  Grid,
  makeStyles,
  Divider,
  Box,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import Team from "./Team.js";

const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  aboutText: {
    color: "#555",
  },
  root: {
    flexGrow: 1,
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  large: {
    margin: "auto",
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  content: {
    marginTop: "34px",
    marginBottom: "34px",
    color: "#333",
  },
  mainTitles: {
    padding: theme.spacing(2),
    fontSize: "20px",
    fontWeight: 400,
    color: "#0D0F44",
  },
  mainHead: {
    padding: theme.spacing(2),
    fontSize: "20px",
    fontWeight: 600,
  },
  BoxSpaces: {
    padding: "15px",
  },
  icons: {
    marginTop: "50px",
    width: "4rem",
    marginBottom: "10px",
  },
  iconsText: {
    fontWeight: "600",
    fontSize: "0.8rem",
  },
}));

function About() {
  const classes = useStyles();
  const history = useHistory();
  const mentors = [
    {
      id: "1",
      name: "Anuj Garg",
      avatar: "/assets/members/anuj.png",
      linkedin: "#",
    },
    {
      id: "2",
      name: "Kunal Kushwaha",
      avatar: "/assets/members/kunal.png",
      linkedin: "#",
    },
    {
      id: "3",
      name: "Ganga Chaturvedi",
      avatar: "/assets/members/ganga.png",
      linkedin: "#",
    },
    {
      id: "4",
      name: "Ekta Mishra",
      avatar: "/assets/members/ekta.png",
      linkedin: "#",
    },
    {
      id: "5",
      name: "Bharat Kumar",
      avatar: "/assets/members/bharat.png",
      linkedin: "#",
    },
    {
      id: "6",
      name: "Shubham Rawat",
      position: "Instructor",
      avatar: "/assets/members/shubham.jpeg",
      linkedin: "#",
    },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.backButton}
            color="inherit"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            About Us
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className={classes.root}>
        <Grid>
          <Box>
            <Typography className={classes.mainHead} variant="h2" color="secondary">
              What We Stand For
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.BoxSpaces}>
            <Typography variant="body2" className={classes.aboutText}>
              We aim to provide a real world practical learning experience and keep students
              informed about the latest trends in technology, open-source and opportunities, so that
              they can keep up with the fast-paced digital world by following a pi-shaped learning
              pattern.
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.mainTitles} variant="h5">
              Open Knowledge
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.BoxSpaces}>
            <Typography variant="body2" className={classes.aboutText}>
              Our structure is based on generating knowledge flow that is not limited by
              bottlenecks. We inspire our mentees to pass on guidance and support, expanding our
              mentor base with each student we teach.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" flexDirection="column" textAlign="center">
            <div>
              <img src="assets/icon/live.svg" className={classes.icons} />
              <Typography className={classes.iconsText}>live classes</Typography>
            </div>
            <div>
              <img src="assets/icon/doubt.svg" className={classes.icons} />
              <Typography className={classes.iconsText}>Doubt Resolution</Typography>
            </div>
            <div>
              <img src="assets/icon/carrer.svg" className={classes.icons} />
              <Typography className={classes.iconsText}>Career Guidance</Typography>
            </div>
          </Box>
          <Box style={{ marginTop: "30px" }}>
            <Typography className={classes.mainTitles} variant="h5">
              Open Source
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.BoxSpaces}>
            <Typography variant="body2" className={classes.aboutText}>
              Our motivation is to funnel learning through OSS development that can solve real-world
              problems. With this, you can enhance your ideation, development, and soft skills such
              as communication, teamwork, and leadership.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" flexDirection="column" textAlign="center">
            <div>
              <img src="assets/icon/dev.svg" className={classes.icons} />
              <Typography className={classes.iconsText}>Develop Products</Typography>
            </div>
            <div>
              <img src="assets/icon/col.svg" className={classes.icons} />
              <Typography className={classes.iconsText}>Collaborative Coding</Typography>
            </div>
            <div>
              <img src="assets/icon/net.svg" className={classes.icons} />
              <Typography className={classes.iconsText}>Networking Events</Typography>
            </div>
          </Box>
        </Grid>
      </Container>
      <div style={{ marginTop: "30px" }}>
        <Team id="team" mentors={mentors} />
      </div>
    </>
  );
}

export default About;
