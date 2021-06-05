import { AppBar, Box, Container, makeStyles, Tab, Tabs, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ExploreMediaCard from "../../CourseMediaCard/ExploreMediaCard";
import CardContainer from "../cardContainer/cardContainer";

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
const courseLabel = [
  {
    title: "All Courses",
  },
  {
    title: "Web Development",
  },
  {
    title: "Machine Learning",
  },
  {
    title: "DevOps",
  },
  {
    title: "Android",
  },
  {
    title: "DSA",
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function ExploreCourseSection() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [listData, setlistData] = useState([]);

  const handleChange = (event, newValue) => {
    switch (value) {
      case 0:
        setlistData(courseList);
        break;

      default:
        setlistData(courseList);
        break;
    }
    setValue(newValue);
  };

  useEffect(() => {
    setlistData(courseList);
  });

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.tabContainer}>
          <Typography variant="h2">Explore All Course</Typography>
          <AppBar position="static" color="default" className={classes.appBar}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {courseLabel.map((items, index) => (
                <Tab key={index} label={items.title} className={classes.tab} />
              ))}
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={value}>
            <CardContainer>
              {listData.map((items, index) => (
                <ExploreMediaCard
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
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 600,
    paddingTop: theme.spacing(15),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(2),
    },
  },
  container: {
    maxWidth: "90%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  card: {
    position: "relative",
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.08)",
    minHeight: 150,
    minWidth: 100,
  },
  textContainer: {
    maxWidth: "38%",
  },
  title: {
    color: theme.palette.primary.main,
  },
  learnButton: {
    marginTop: theme.spacing(8),
    color: "#fff",
    textTransform: "none",
    background: theme.palette.primary.main,
    padding: theme.spacing(2),
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  description: {
    lineHeight: 1.5,
  },
  image: {
    position: "absolute",
    height: 70,
    right: 20,
    bottom: 10,
  },
  cardItems: {
    textAlign: "left",
  },
  spanText: {
    color: theme.palette.primary.main,
  },
  appBar: {
    marginTop: theme.spacing(5),
    background: "#fff",
  },
  tab: {
    background: "#E7EDF7",
    margin: 10,
    borderRadius: "5px",
    textTransform: "none",
  },
}));

export default ExploreCourseSection;
