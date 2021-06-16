import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import CourseHeroSection from "../../components/CourseDetailsComponent/CourseHeroSection";
import AboutCourse from "../../components/CourseDetailsComponent/AboutCourse";
import CardContainer from "../../components/cardContainer/cardContainer";
import BrowseAllButton from "../../components/BrowseAllButton/index";
import MediaCard from "../../components/CourseMediaCard/MediaCard";

const courseList = [
  {
    title: " Full stack Web application Development Course By Code for Cause",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    courseImage: "/assets/img/img3.PNG",
    tag: "Web Development",
    price: "₹1200",
    ratings: "4.5",
    lessonsNumbers: "35",
    mentors: [
      {
        id: "1",
        image: "assets/members/anuj.png",
      },
      {
        id: "2",
        image: "assets/members/ganga.png",
      },
    ],
  },
  {
    title: " Full stack Web application Development Course By Code for Cause",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    courseImage: "/assets/img/img3.PNG",
    tag: "Web Development",
    price: "₹1200",
    ratings: "4.5",
    lessonsNumbers: "35",
    mentors: [
      {
        id: "1",
        image: "assets/members/anuj.png",
      },
      {
        id: "2",
        image: "assets/members/ganga.png",
      },
    ],
  },
];

function CourseDetail(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CourseHeroSection />
      <AboutCourse />
      <Box className={classes.courseContainer}>
        <Box className={classes.popularContainer}>
          <Typography variant="h2">Similar Courses</Typography>
          <BrowseAllButton onClick={() => console.log("Popular Course")} />
        </Box>
        <CardContainer>
          {courseList.map((items, index) => (
            <MediaCard
              key={index}
              title={items.title}
              description={items.description}
              ratings={items.ratings}
              lessonsNumbers={items.lessonsNumbers}
              courseImage={items.courseImage}
              tag={items.tag}
              price={items.price}
              mentors={items.mentors}
            />
          ))}
        </CardContainer>
        <Box className={classes.popularContainer}>
          <Typography variant="h2">Upcoming Course</Typography>
          <BrowseAllButton onClick={() => console.log("Popular Course")} />
        </Box>
        <CardContainer>
          {courseList.map((items, index) => (
            <MediaCard
              key={index}
              title={items.title}
              description={items.description}
              ratings={items.ratings}
              lessonsNumbers={items.lessonsNumbers}
              courseImage={items.courseImage}
              tag={items.tag}
              price={items.price}
              mentors={items.mentors}
            />
          ))}
        </CardContainer>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  popularContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseContainer: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    marginTop: theme.spacing(10),
  },
}));

export default CourseDetail;
