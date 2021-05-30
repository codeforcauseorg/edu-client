import { useEffect } from "react";
import { Plugins } from "@capacitor/core";
import HeaderSection from "../../components/HomeViewComponents/HeaderSection";
import FooterSection from "../../components/HomeViewComponents/FooterSection";
import Tags from "../../components/HomeViewComponents/Tags";
import ContinueLearningCard from "../../components/ContinueLearningCard";
import CardContainer from "../../components/cardContainer/cardContainer";
import { Container, makeStyles, Typography } from "@material-ui/core";
const { SplashScreen } = Plugins;

const ContinueLearningList = [
  {
    title: "Introduction to machine learning",
    image: "assets/img/img3.PNG",
    chapterTitle: " Chapter 1 : Full Stack Web Development Course",
    courseTitle: " Full Stack Web Development Course",
    completedLessons: "12",
    totalLessons: "35",
    completedPercentage: 75,
  },
  {
    title: "Introduction to machine learning",
    image: "assets/img/img3.PNG",
    chapterTitle: " Chapter 1 : Full Stack Web Development Course",
    courseTitle: " Full Stack Web Development Course",
    completedLessons: "12",
    totalLessons: "35",
    completedPercentage: 45,
  },
];
export default function HomeView(props) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const classes = useStyles();
  return (
    <div>
      <HeaderSection />
      <Tags />
      <Container className={classes.wrapperContainer}>
        <Typography variant="h2">Continue Learning</Typography>
        <CardContainer>
          {ContinueLearningList.map((items, index) => (
            <ContinueLearningCard
              key={index}
              title={items.title}
              image={items.image}
              chapterTitle={items.chapterTitle}
              courseTitle={items.courseTitle}
              completedLessons={items.completedLessons}
              totalLessons={items.totalLessons}
              completedPercentage={items.completedPercentage}
            />
          ))}
        </CardContainer>
      </Container>

      <FooterSection />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    maxWidth: "90%",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
}));
