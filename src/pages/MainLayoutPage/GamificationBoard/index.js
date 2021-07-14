import { Container, makeStyles } from "@material-ui/core";
import HeroSection from "../../../components/HeroSection";

function GamificationBoard(props) {
  const classes = useStyles();

  const heroElements = {
    title: "Gamification Board",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the.",
  };

  return (
    <Container className={classes.wrapperContainer}>
      <HeroSection
        title={heroElements.title}
        description={heroElements.description}
        banner="assets/img/gamificationBanner.svg"
      />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    minWidth: "90%",
  },
}));

export default GamificationBoard;
