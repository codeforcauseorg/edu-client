import { Container, makeStyles } from "@material-ui/core";
import FilterBar from "../../../components/MyCourseComponents/FilterBar";
import MyCourseCard from "../../../components/MyCourseComponents/MyCourseCard";
import TagSection from "../../../components/TagSection";
import HeroSection from "../../../components/HeroSection/index";
function MyCourses(props) {
  const classes = useStyles();

  const heroElements = {
    title: "Enrolled Courses",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the.",
    borderColor: "4px solid #00BFFF",
    gradientColor: "linear-gradient(180deg, #00BFFF 0%, #3740A1 100%)",
    otherDetails: "5 Enrolled Courses",
  };

  return (
    <Container className={classes.wrapperContainer}>
      <HeroSection
        title={heroElements.title}
        description={heroElements.description}
        borderColor={heroElements.borderColor}
        gradientColor={heroElements.gradientColor}
        otherDetails={heroElements.otherDetails}
      />
      <FilterBar />
      <TagSection />
      <MyCourseCard />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    minWidth: "90%",
  },
}));

export default MyCourses;
