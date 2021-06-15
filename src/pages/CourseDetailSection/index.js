import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import CourseHeroSection from "../../components/CourseDetailsComponent/CourseHeroSection";
import AboutCourse from "../../components/CourseDetailsComponent/AboutCourse";

function CourseDetail(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CourseHeroSection />
      <AboutCourse />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({}));

export default CourseDetail;
