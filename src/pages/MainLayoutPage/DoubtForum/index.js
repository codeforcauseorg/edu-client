import { Container, makeStyles, Box } from "@material-ui/core";
import FilterSection from "../../../components/DoubtForumComponent/FilterSection";
import QuestionSection from "../../../components/DoubtForumComponent/QuestionSection";
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
      <Box className={classes.container}>
        <QuestionSection />
        <FilterSection />
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    minWidth: "90%",
  },
  container: {
    display: "flex",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

export default DoubtForum;
