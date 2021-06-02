import { useEffect } from "react";
import { Plugins } from "@capacitor/core";
import HeaderSection from "../../components/HomeViewComponents/HeaderSection";
import Tags from "../../components/HomeViewComponents/Tags";
import ContinueLearningCard from "../../components/ContinueLearningCard";
import CardContainer from "../../components/cardContainer/cardContainer";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import BrowseAllButton from "../../components/BrowseAllButton";
import MediaCardWeb from "../../CourseMediaCard/Web";
const { SplashScreen } = Plugins;

const ContinueLearningList = [
  {
    title: "Introduction to machine learning",
    image: "assets/img/img3.PNG",
    chapterTitle: " Chapter 1 : Full Stack Web Development Course",
    courseTitle: " Full Stack Web Development Course",
    completedLessons: "12",
    totalLessons: "35",
    completedPercentage: 75,
  },
  {
    title: "Introduction to machine learning",
    image: "assets/img/img3.PNG",
    chapterTitle: " Chapter 1 : Full Stack Web Development Course",
    courseTitle: " Full Stack Web Development Course",
    completedLessons: "12",
    totalLessons: "35",
    completedPercentage: 45,
  },
];
const courseList = [
  {
    title: " Full stack Web application Development Course By Code for Cause",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    courseImage: "/assets/img/img3.PNG",
    tag: "Web Development",
    price: "₹1200",
    ratings: "4.5",
    lessonsNumbers: "35",
    mentors: [
      {
        id: "1",
        image: "assets/members/anuj.png",
      },
      {
        id: "2",
        image: "assets/members/ganga.png",
      },
    ],
  },
  {
    title: " Full stack Web application Development Course By Code for Cause",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    courseImage: "/assets/img/img3.PNG",
    tag: "Web Development",
    price: "₹1200",
    ratings: "4.5",
    lessonsNumbers: "35",
    mentors: [
      {
        id: "1",
        image: "assets/members/anuj.png",
      },
      {
        id: "2",
        image: "assets/members/ganga.png",
      },
    ],
  },
];
export default function HomeView(props) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const classes = useStyles();
  return (
    <div>
      <HeaderSection />
      <Tags />
      <Container className={classes.wrapperContainer}>
        <Typography variant="h2">Continue Learning</Typography>
        <CardContainer>
          {ContinueLearningList.map((items, index) => (
            <ContinueLearningCard
              key={index}
              title={items.title}
              image={items.image}
              chapterTitle={items.chapterTitle}
              courseTitle={items.courseTitle}
              completedLessons={items.completedLessons}
              totalLessons={items.totalLessons}
              completedPercentage={items.completedPercentage}
            />
          ))}
        </CardContainer>
        <Box className={classes.popularContainer}>
          <Typography variant="h2">Popular Course</Typography>
          <BrowseAllButton onClick={() => console.log("Popular Course")} />
        </Box>
        <CardContainer>
          {courseList.map((items, index) => (
            <MediaCardWeb
              key={index}
              title={items.title}
              description={items.description}
              ratings={items.ratings}
              lessonsNumbers={items.lessonsNumbers}
              courseImage={items.courseImage}
              tag={items.tag}
              price={items.price}
              mentors={items.mentors}
            />
          ))}
        </CardContainer>
        <Box className={classes.popularContainer}>
          <Typography variant="h2">Upcoming Course</Typography>
          <BrowseAllButton onClick={() => console.log("Popular Course")} />
        </Box>
        <CardContainer>
          {courseList.map((items, index) => (
            <MediaCardWeb
              key={index}
              title={items.title}
              description={items.description}
              ratings={items.ratings}
              lessonsNumbers={items.lessonsNumbers}
              courseImage={items.courseImage}
              tag={items.tag}
              price={items.price}
              mentors={items.mentors}
            />
          ))}
        </CardContainer>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    maxWidth: "90%",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  popularContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
