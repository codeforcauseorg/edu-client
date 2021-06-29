import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import CourseHeroSection from "../../components/CourseDetailsComponent/CourseHeroSection";
import AboutCourse from "../../components/CourseDetailsComponent/AboutCourse";
// import CardContainer from "../../components/cardContainer/cardContainer";
import BrowseAllButton from "../../components/BrowseAllButton/index";
// import MediaCard from "../../components/CourseMediaCard/MediaCard";
import { setCourseDetailsData } from "../../services/courseServices";
import { connect } from "react-redux";
import { useEffect } from "react";

function CourseDetail({ courseData, fetchData }) {
  const classes = useStyles();
  console.log(courseData.courseDetails);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      {courseData.courseDetails === null ? "Loading...." : <CourseHeroSection />}

      <AboutCourse />
      <Box className={classes.courseContainer}>
        <Box className={classes.popularContainer}>
          <Typography variant="h2">Similar Courses</Typography>
          <BrowseAllButton onClick={() => console.log("Popular Course")} />
        </Box>
        {/* <CardContainer>
          {courseList.map((items, index) => (
            <MediaCard
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
        </CardContainer> */}
        <Box className={classes.popularContainer}>
          <Typography variant="h2">Upcoming Course</Typography>
          <BrowseAllButton onClick={() => console.log("Popular Course")} />
        </Box>

        {/* <CardContainer>
          {courseList.map((items, index) => (
            <MediaCard
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
        </CardContainer> */}
      </Box>
    </Box>
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
    fetchData: () => dispatch(setCourseDetailsData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
