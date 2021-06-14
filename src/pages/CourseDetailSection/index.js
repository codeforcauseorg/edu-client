import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import CourseHeroSection from "../../components/CourseDetailsComponent/CourseHeroSection";

function CourseDetail(props) {
  // const history = useHistory();
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CourseHeroSection />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({}));

export default CourseDetail;
