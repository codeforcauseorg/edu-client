import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import CourseHeroSection from "../../components/CourseDetailsComponent/CourseHeroSection";
import AboutCourse from "../../components/CourseDetailsComponent/AboutCourse";
import CardContainer from "../../components/cardContainer/cardContainer";
import BrowseAllButton from "../../components/BrowseAllButton/index";
import MediaCard from "../../components/CourseMediaCard/MediaCard";
import HeroSkeleton from "../../components/skeleton/SkeletonCourseDetails/HeroSkeleton";
import NavBar from "../../components/NavBar/index";
import SkeletonMediaCard from "../../components/skeleton/SkeletonMediaCard";
import { useParams } from "react-router";
import useSWR from "swr";

function CourseDetail() {
  const classes = useStyles();
  const { id } = useParams();

  const { data: courseDetails } = useSWR("/course/" + id);
  const { data: courseData } = useSWR("/course/cards/all");
  console.log(courseDetails);

  return (
    <>
      <NavBar />
      <Box>
        {courseDetails === undefined ? (
          <HeroSkeleton />
        ) : (
          <Box>
            <CourseHeroSection details={courseDetails} />
            <AboutCourse about={courseDetails} />
          </Box>
        )}

        <Box className={classes.courseContainer}>
          <Box className={classes.popularContainer}>
            <Typography variant="h2">Similar Courses</Typography>
            <BrowseAllButton onClick={() => console.log("Popular Course")} />
          </Box>
          <CardContainer>
            {courseData === undefined
              ? [1, 2, 3, 4].map((index) => <SkeletonMediaCard key={index} />)
              : courseData.map((items, index) => <MediaCard key={index} props={items} />)}
          </CardContainer>
          <Box className={classes.popularContainer}>
            <Typography variant="h2">Upcoming Course</Typography>
            <BrowseAllButton onClick={() => console.log("Popular Course")} />
          </Box>
          <CardContainer>
            {courseData === undefined
              ? [1, 2, 3, 4].map((index) => <SkeletonMediaCard key={index} />)
              : courseData.map((items, index) => <MediaCard key={index} props={items} />)}
          </CardContainer>
        </Box>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  popularContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseContainer: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
  },
}));

export default CourseDetail;
