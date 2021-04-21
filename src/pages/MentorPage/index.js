import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  Button,
  Divider,
  AppBar,
  IconButton,
  Toolbar,
  makeStyles,
  Container,
  Link,
  Box,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import StudentReviews from "./StudentReviews";
import Stats from "./Stats";
import Grid from "@material-ui/core/Grid";

<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"
></link>;

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "rgb(21, 0, 81)",
    fontSize: "0.85rem",
    transition: "0.3s",
    marginTop: "15px",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "rgb(138, 128, 168)",
    },
  },
  head: {
    flexGrow: 1,
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  aboutText: {
    color: "#555",
  },
  socialWrapper: {
    paddingBottom: "10px",
    paddingLeft: "10px",
  },
  socialIcons: {
    color: "#0D0F44",
    fontSize: "35px",
    paddingBottom: "10px",
    cursor: "pointer",
    "&:hover": {
      color: "#e59819",
    },
  },
  body: {
    margin: "20px",
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  profiletitle: {
    padding: theme.spacing(2),
    fontSize: "20px",
    fontWeight: 400,
    color: "#0D0F44",
  },
  margin: {
    margin: theme.spacing(2),
  },
  BoxSpaces: {
    padding: "15px",
  },
}));

function MentorDetail() {
  const classes = useStyles();
  const history = useHistory();
  const Reviews = [
    {
      id: 1,
      name: "Dev",
      review: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
      stars: "5",
    },
    {
      id: 2,
      name: "ADev",
      review: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
      stars: "4",
    },
    {
      id: 3,
      name: "BDev",
      review: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
      stars: "5",
    },
  ];

  const mentorData = [
    {
      id: 1,
      mentorName: "Anuj garg",
      desc: "Web Developer,Designer,and Teacher",
      overallRating: "4.7 Instructor Rating",
      TotalReviews: "220,060 Reviews",
      TotalStudents: "1,031,359 Students",
      courses: "5 Courses",
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
          <Typography variant="h6" color="inherit" className={classes.head}>
            About Instuctor
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>
        <Box className={classes.BoxSpaces}>
          {mentorData.map((data, index) => {
            return <Stats data={data} key={index} />;
          })}
        </Box>
        <Container>
          <Box>
            <Typography className={classes.profiletitle} variant="h5">
              About Me !!
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.BoxSpaces}>
            <Typography variant="body2" className={classes.aboutText}>
              Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of
              document.Lorem ipsum is a placeholder text commonly used to demonstrate the visual
              form of document or a typeface without relying on meaningful content.
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.profiletitle} variant="h5">
              Featured Reviews
            </Typography>
            <Divider />
            <Box className={classes.BoxSpaces}>
              {Reviews.map((data, index) => {
                return <StudentReviews data={data} key={index} />;
              })}
            </Box>
          </Box>
          <Typography className={classes.profiletitle} variant="h5">
            Review Me !!
          </Typography>
          <Divider />
          <Grid align="center" justify="center" spacing={1} alignItems="center">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => history.push("/ratementor/:coursename")}
            >
              Rate Mentor
            </Button>
          </Grid>
          <Box>
            <Typography className={classes.profiletitle} variant="h5">
              Wanna Connect :)
            </Typography>
          </Box>
          <div className={classes.socialWrapper}>
            <Link href="#">
              <FacebookIcon className={classes.socialIcons} />
            </Link>
            <Link href="#">
              <TwitterIcon className={classes.socialIcons} />
            </Link>
            <Link href="#">
              <InstagramIcon className={classes.socialIcons} />
            </Link>
            <Link href="#">
              <LinkedInIcon className={classes.socialIcons} />
            </Link>
          </div>
          <Divider />
        </Container>
      </div>
    </>
  );
}

export default MentorDetail;
