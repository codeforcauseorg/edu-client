import React from "react";
import Description from "../components/courseDetails/description";
import Hero from "../components/hero/Hero";
import { makeStyles } from "@material-ui/core/styles";
import courseDetail from "../data/courseDetail.json";
import Perks from "../components/courseDetails/perks";
import Schedule from "../components/courseDetails/schedule";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  navigation: {
    widht: "100%",
    height: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 10px",
    backgroundColor: "white" /* For browsers that do not support gradients */,
    backgroundImage: "linear-gradient(purple, white)",
  },
  courseDetail: {
    padding: "0 15px",
    textAlign: "start",
  },
}));

const heroData = courseDetail[0].heroSection;
const descriptionData = courseDetail[0].descriptionSection;
const perksData = courseDetail[0].perksSection;
function CourseDetail() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.navigation}>
        <ArrowBackIcon />
        <MoreVertIcon />
      </div>
      <div className={classes.courseDetail}>
        <Hero
          title={heroData.title}
          description={heroData.description}
          startDate={heroData.startDate}
          duration={heroData.duration}
          languages={heroData.languages}
          thumbnail={heroData.thumbnail}
          videoUrl={heroData.videoUrl}
          price={heroData.price}
        />
        <Description description={descriptionData.description} mentors={descriptionData.mentors} />
        <Perks
          perks={perksData.perks}
          afterCourse={perksData.afterCourse}
          prerequisites={perksData.prerequisites}
        />
        <Schedule />
      </div>
    </>
  );
}

export default CourseDetail;
