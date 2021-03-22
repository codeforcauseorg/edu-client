import React from "react";

import Hero from "../components/hero/Hero";
import CardContainer from "../components/cardContainer/cardContainer";
import SimpleCard from "../components/simpleCard/simpleCard";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  title: {
    fontWeight: "700",
    margin: "10px",
  },
  subTitle: {
    margin: "0 10px",
  },
});

function CourseDetail() {
  const classes = useStyles();

  return (
    <div className={classes.courseDetail}>
      <Hero
        title="Full Stack Development Course By Code For Cause"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
            nesciunt necessitatibus? Laboriosam, eum aut explicabo dolores
            reprehenderit corporis porro provident deleniti nesciunt nostrum?"
        startDate="16th March Onwards"
        duration="36"
        languages="English, Hindi"
        thumbnail="https://images.unsplash.com/photo-1423530990185-af7dde1155fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        videoUrl="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        price="94.00"
      />
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
  );
}

export default CourseDetail;
