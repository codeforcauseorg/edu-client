import { Avatar, Box, Chip, Container, makeStyles, Typography } from "@material-ui/core";
import CheckCircle from "@material-ui/icons/CheckCircle";
import React from "react";
import BrowseAllButton from "../../components/BrowseAllButton";
import CardContainer from "../../components/cardContainer/cardContainer";
import MediaCard from "../../components/CourseMediaCard/MediaCard";
import MentorHeroSection from "../../components/MentorSectionComponent/MentorHeroSection";
import SkeletonMediaCard from "../../components/skeleton/SkeletonMediaCard";
import useSWR from "swr";
import { useParams } from "react-router";
import { loadData } from "../../services/apiService";
import { ALL_COURSE_CARD_ENDPOINT, MENTOR_DETAIL_ENDPOINT } from "../../constants/apiEndpoints";
import SkeletonElement from "../../components/skeleton/SkeletonElement";
import SkeletonMentorHero from "../../components/skeleton/SkeletonMentorHero";

function AboutMentorSection() {
  const classes = useStyles();

  const { id } = useParams();

  const { data: courseData } = useSWR(ALL_COURSE_CARD_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const { data: mentor } = useSWR(MENTOR_DETAIL_ENDPOINT + id, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const mentorCourse = courseData?.filter((course) => mentor?.courses?.includes(course._id));

  return (
    <Box className={classes.root}>
      {mentor === undefined ? <SkeletonMentorHero /> : <MentorHeroSection mentorInfo={mentor} />}
      <Container className={classes.infoContainer}>
        <Typography variant="h2" color="textPrimary" gutterBottom className={classes.title}>
          About Me
        </Typography>
        {mentor === undefined ? (
          [1, 2, 3].map((index) => <SkeletonElement key={index} variant="text" component="h1" />)
        ) : (
          <Typography variant="h4" component="p" color="textPrimary" className={classes.aboutBody}>
            {mentor.aboutMe}
          </Typography>
        )}

        <Typography variant="h2" color="textPrimary" gutterBottom className={classes.title}>
          Teaching Stack
        </Typography>
        {mentor === undefined ? (
          <SkeletonElement
            variant="text"
            component="h4"
            height={50}
            width={100}
            className={classes.chip}
          />
        ) : (
          mentor.techStack.map((items, index) => (
            <Chip
              className={classes.chip}
              key={index}
              avatar={
                <Avatar>
                  <CheckCircle className={classes.icon} />
                </Avatar>
              }
              label={items}
            />
          ))
        )}
        <Box className={classes.popularContainer}>
          <Typography variant="h2" gutterBottom>
            Popular Course
          </Typography>
          <BrowseAllButton onClick={() => console.log("Popular Course")} />
        </Box>
        <CardContainer>
          {mentorCourse === undefined
            ? [1, 2, 3, 4].map((index) => <SkeletonMediaCard key={index} />)
            : mentorCourse.map((items, index) => <MediaCard key={index} props={items} />)}
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
    lineHeight: 2,
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
