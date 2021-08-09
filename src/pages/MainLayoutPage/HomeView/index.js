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
import { loadData } from "../../../services/apiService";
import { useSelector } from "react-redux";
import Banner from "../../../components/HomeViewComponents/Banner";
import { ALL_COURSE_CARD_ENDPOINT } from "../../../constants/apiEndpoints";

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

  const { data: courseCardData } = useSWR(ALL_COURSE_CARD_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 100000,
  });

  const upcomingCourse = courseCardData?.filter((course) => course.name === "C++ DSA"); // course.isUpcomming === true

  const user = useSelector((state) => state.account.user);

  return (
    <div>
      <HeaderSection />
      <Tags />
      <Container className={classes.wrapperContainer}>
        {user ? (
          <>
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
          </>
        ) : (
          <Box />
        )}

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
          {upcomingCourse === undefined
            ? [1, 2, 3, 4].map((index) => <SkeletonMediaCard key={index} />)
            : upcomingCourse.map((items, index) => <MediaCard key={index} props={items} />)}
        </CardContainer>
      </Container>
      <ExploreCourseSection exploreCourse={courseCardData} />
      <OurImpactSection />
      <MentorSection />
      <Banner />
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
