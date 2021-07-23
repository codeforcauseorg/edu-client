import HeaderSection from "../../../components/HomeViewComponents/HeaderSection";
import Tags from "../../../components/HomeViewComponents/Tags";
import ContinueLearningCard from "../../../components/ContinueLearningCard";
import CardContainer from "../../../components/cardContainer/cardContainer";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import BrowseAllButton from "../../../components/BrowseAllButton";
import StudentReviewSection from "../../../components/HomeViewComponents/StudentReviewSection";
import MentorSection from "../../../components/HomeViewComponents/MentorSection";
import OurImpactSection from "../../../components/HomeViewComponents/OurImpactSection";
import ExploreCourseSection from "../../../components/HomeViewComponents/ExploreCourseSection";
import MediaCard from "../../../components/CourseMediaCard/MediaCard";
import SkeletonMediaCard from "../../../components/skeleton/SkeletonMediaCard";
import useSWR from "swr";

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

function HomeView() {
  const classes = useStyles();
  const { data: courseCardData } = useSWR("/course/cards/all");

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
          {courseCardData === undefined
            ? [1, 2, 3, 4].map((index) => <SkeletonMediaCard key={index} />)
            : courseCardData.map((items, index) => <MediaCard key={index} props={items} />)}
        </CardContainer>
        <Box className={classes.popularContainer}>
          <Typography variant="h2">Upcoming Course</Typography>
          <BrowseAllButton onClick={() => console.log("Popular Course")} />
        </Box>
        <CardContainer>
          {courseCardData === undefined
            ? [1, 2, 3, 4].map((index) => <SkeletonMediaCard key={index} />)
            : courseCardData.map((items, index) => <MediaCard key={index} props={items} />)}
        </CardContainer>
      </Container>
      <ExploreCourseSection />
      <OurImpactSection />
      <MentorSection />
      <StudentReviewSection />
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

export default HomeView;
