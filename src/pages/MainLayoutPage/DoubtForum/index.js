import { Container, makeStyles } from "@material-ui/core";
import FilterBar from "../../../components/GamificationComponents/FilterBar";
import TagSection from "../../../components/TagSection";
import HeroSection from "../../../components/HeroSection/index";

function DoubtForum(props) {
  const classes = useStyles();

  const heroElements = {
    title: "Doubt forum",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the.",
  };

  return (
    <Container className={classes.wrapperContainer}>
      <HeroSection title={heroElements.title} description={heroElements.description} />
      <FilterBar />
      <TagSection />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    minWidth: "90%",
  },
}));

export default DoubtForum;
