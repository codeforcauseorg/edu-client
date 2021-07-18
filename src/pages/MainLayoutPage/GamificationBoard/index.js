import { Container, makeStyles } from "@material-ui/core";
import LeaderboardFilter from "../../../components/GamificationComponent/LeaderboardFilter";
import LeaderboardSection from "../../../components/GamificationComponent/LeaderboardSection";
import StatsCardSection from "../../../components/GamificationComponent/StatsCardSection";
import HeroSection from "../../../components/HeroSection";

function GamificationBoard(props) {
  const classes = useStyles();

  const heroElements = {
    title: "Gamification Board",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the.",
  };

  return (
    <Container className={classes.wrapperContainer} disableGutters>
      <HeroSection
        title={heroElements.title}
        description={heroElements.description}
        banner="assets/img/gamificationBanner.svg"
      />
      <Container className={classes.innerContainer}>
        <StatsCardSection />
        <LeaderboardFilter />
        <LeaderboardSection />
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    minWidth: "90%",
  },
  innerContainer: {
    maxWidth: "85%",
  },
}));

export default GamificationBoard;
