import { makeStyles } from "@material-ui/core";
import Hero from "../../components/courseDetails/Hero";
import courseDetail from "../../data/courseDetail.json";
import Details from "../../components/courseDetails/CourseDetailBody";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    margin: "0 5rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
    },
  },
}));

const heroData = courseDetail[0].heroSection;
const descriptionData = courseDetail[0].descriptionSection;

function CourseDetail(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Hero
          title={heroData.title}
          description={heroData.description}
          startDate={heroData.startDate}
          duration={heroData.duration}
          languages={heroData.languages}
          thumbnail={heroData.thumbnail}
          videoUrl={heroData.videoUrl}
          price={heroData.price}
          mentorList={descriptionData.mentors}
        />
      </div>
      <Details description={descriptionData.description} mentors={descriptionData.mentors} />
    </div>
  );
}

export default CourseDetail;
