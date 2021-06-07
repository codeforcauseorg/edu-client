import { Container, makeStyles } from "@material-ui/core";
import FilterBar from "../../components/MyCourseComponents/FilterBar";
import MyCourseCard from "../../components/MyCourseComponents/MyCourseCard";
import MyCourseHero from "../../components/MyCourseComponents/MyCourseHero";
import TagSection from "../../components/TagSection";

function MyCourses(props) {
  const classes = useStyles();

  return (
    <Container className={classes.wrapperContainer}>
      <MyCourseHero />
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
