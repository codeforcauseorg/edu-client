import { Avatar, Box, Chip, Container, makeStyles, Typography } from "@material-ui/core";
import CheckCircle from "@material-ui/icons/CheckCircle";
import React from "react";
import BrowseAllButton from "../../components/BrowseAllButton";
import CardContainer from "../../components/cardContainer/cardContainer";
import MediaCard from "../../components/CourseMediaCard/MediaCard";
import MentorHeroSection from "../../components/MentorSectionComponent/MentorHeroSection";
import SkeletonMediaCard from "../../components/skeleton/SkeletonMediaCard";
import useSWR from "swr";

function AboutMentorSection() {
  const classes = useStyles();
  const { data: courseData } = useSWR("/course/cards/all");

  return (
    <Box className={classes.root}>
      <MentorHeroSection />
      <Container className={classes.infoContainer}>
        <Typography variant="h2" color="textPrimary" gutterBottom className={classes.title}>
          About Me
        </Typography>
        <Typography variant="h4" component="p" color="textPrimary" className={classes.aboutBody}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim
        </Typography>
        <Typography variant="h2" color="textPrimary" gutterBottom className={classes.title}>
          Teaching Stack
        </Typography>
        {[1, 2, 3].map((items, index) => (
          <Chip
            className={classes.chip}
            key={index}
            avatar={
              <Avatar>
                <CheckCircle className={classes.icon} />
              </Avatar>
            }
            label="Python"
          />
        ))}
        <Box className={classes.popularContainer}>
          <Typography variant="h2" gutterBottom>
            Popular Course
          </Typography>
          <BrowseAllButton onClick={() => console.log("Popular Course")} />
        </Box>
        <CardContainer>
          {courseData === undefined
            ? [1, 2, 3, 4].map((index) => <SkeletonMediaCard key={index} />)
            : courseData.map((items, index) => <MediaCard key={index} props={items} />)}
        </CardContainer>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
  infoContainer: {
    maxWidth: "85%",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "95%",
    },
  },
  aboutBody: {
    marginTop: theme.spacing(4),
    fontWeight: 500,
  },
  title: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  chip: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6),
    background: theme.palette.primary.main,
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  icon: {
    color: "#fff",
  },
  popularContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4),
    },
  },
}));

export default AboutMentorSection;
