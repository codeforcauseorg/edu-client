import React from "react";
import Description from "../components/courseDetails/description";
import Hero from "../components/hero/Hero";
import CardContainer from "../components/cardContainer/cardContainer";
import SimpleCard from "../components/simpleCard/simpleCard";
import { makeStyles } from "@material-ui/core/styles";
import courseDetail from "../data/courseDetail.json";
import Perks from "../components/courseDetails/perks";
import Schedule from "../components/courseDetails/schedule";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Typography } from "@material-ui/core";

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
  title: {
    fontWeight: "700",
    margin: "10px",
  },
  subTitle: {
    margin: "0 10px",
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
        <Typography className={classes.title} variant="subtitle2" color="primary">
          Beginner Courses
        </Typography>
        <Typography className={classes.subTitle} variant="h2" component="h2">
          Learn something New
        </Typography>
        <CardContainer>
          <SimpleCard
            width="240px"
            image="https://images.hdqwalls.com/download/landscape-lake-mountains-4k-zg-2560x1080.jpg"
            title="Full Stack Development Course by Code For Cause"
            subTitle="Beginner Level"
            detail="35 hrs of learning content"
            price="₹ 8,096 /-"
            showIcon={true}
          />
          <SimpleCard
            width="240px"
            image="https://images.hdqwalls.com/download/landscape-lake-mountains-4k-zg-2560x1080.jpg"
            title="Full Stack Development Course by Code For Cause"
            subTitle="Beginner Level"
            detail="35 hrs of learning content"
            price="₹ 8,096 /-"
            showIcon={true}
          />
          <SimpleCard
            width="240px"
            image="https://images.hdqwalls.com/download/landscape-lake-mountains-4k-zg-2560x1080.jpg"
            title="Full Stack Development Course by Code For Cause"
            subTitle="Beginner Level"
            detail="35 hrs of learning content"
            price="₹ 8,096 /-"
            showIcon={true}
          />
        </CardContainer>
        <Typography className={classes.subTitle} variant="h2" component="h2">
          Top Picks
        </Typography>
        <CardContainer>
          <SimpleCard
            width="300px"
            image="https://images.hdqwalls.com/download/landscape-lake-mountains-4k-zg-2560x1080.jpg"
            title="Full Stack Development Course by Code For Cause"
            subTitle="Beginner Level"
            detail="35 hrs of learning content"
            price="₹ 8,096 /-"
            showIcon={false}
          />
          <SimpleCard
            width="300px"
            image="https://images.hdqwalls.com/download/landscape-lake-mountains-4k-zg-2560x1080.jpg"
            title="Full Stack Development Course by Code For Cause"
            subTitle="Beginner Level"
            detail="35 hrs of learning content"
            price="₹ 8,096 /-"
            showIcon={false}
          />
        </CardContainer>
      </div>
    </>
  );
}

export default CourseDetail;
