import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import CourseHeroSection from "../../components/CourseDetailsComponent/CourseHeroSection";
import AboutCourse from "../../components/CourseDetailsComponent/AboutCourse";
import CardContainer from "../../components/cardContainer/cardContainer";
import BrowseAllButton from "../../components/BrowseAllButton/index";
import MediaCard from "../../components/CourseMediaCard/MediaCard";
import { setCourseData, setCourseDetailsData } from "../../services/courseServices";
import { connect } from "react-redux";
import { useEffect } from "react";
import HeroSkeleton from "../../components/skeleton/SkeletonCourseDetails/HeroSkeleton";
import NavBar from "../../components/NavBar/index";
import SkeletonMediaCard from "../../components/skeleton/SkeletonMediaCard";
import { useParams } from "react-router";

function CourseDetail({ courseData, fetchCourseDetails, fetchCourse }) {
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    fetchCourseDetails();
    fetchCourse();
  }, []);

  return (
    <>
      <NavBar />
      <Box>
        {courseData.courseDetails === null ? (
          <HeroSkeleton />
        ) : (
          <Box>
            <CourseHeroSection details={courseData.courseDetails} />
            <AboutCourse about={courseData.courseDetails} />
          </Box>
        )}

        <Box className={classes.courseContainer}>
          <Box className={classes.popularContainer}>
            <Typography variant="h2">Similar Courses</Typography>
            <BrowseAllButton onClick={() => console.log("Popular Course")} />
          </Box>
          <CardContainer>
            {courseData.course === null
              ? [1, 2, 3, 4].map((index) => <SkeletonMediaCard key={index} />)
              : courseData.course.popular.map((items, index) => (
                  <MediaCard key={index} props={items} />
                ))}
          </CardContainer>
          <Box className={classes.popularContainer}>
            <Typography variant="h2">Upcoming Course</Typography>
            <BrowseAllButton onClick={() => console.log("Popular Course")} />
          </Box>
          <CardContainer>
            {courseData.course === null
              ? [1, 2, 3, 4].map((index) => <SkeletonMediaCard key={index} />)
              : courseData.course.upcoming.map((items, index) => (
                  <MediaCard key={index} props={items} />
                ))}
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

const mapStateToProps = (state) => {
  return {
    courseData: state.course,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  const id = props.match.params.id;

  return {
    fetchCourseDetails: () => dispatch(setCourseDetailsData(id)),
    fetchCourse: () => dispatch(setCourseData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
