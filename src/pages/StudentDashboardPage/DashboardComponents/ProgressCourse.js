import { Box, Button, Container, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CourseMediaCard from "./CourseMediaCard";

const useStyle = makeStyles((theme) => ({
  root: {},
  titleContainer: {
    marginTop: theme.spacing(2),
  },
  buttonContainer: {
    marginTop: theme.spacing(1),
  },
  button: {
    textTransform: "none",
    borderRadius: 5,
    color: "#fff",
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  mediaCardContainer: {
    padding: "20px 10px",
    paddingBottom: "50px",
    display: "flex",
    flexWrap: "nowrap",
    gap: "24px",
    overflowX: "scroll",
    scrollbarWidth: "none" /* mozilla */,
    "&::-webkit-scrollbar": {
      display: "none" /* Safari and Chrome browsers */,
    },
  },
}));

const ongoingData = [
  {
    chapterNumber: "3",
    chapterTitle: "How to start with Web Development",
    courseName: "Full Stack Development Course by Code For Cause",
    bannerImage:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    completedDuration: " 1 hr min",
    totalDuration: "3 days",
    progressValue: "20",
  },
  {
    chapterNumber: "1",
    chapterTitle: "How to start with App Development",
    courseName: "Full Stack Development Course by Code For Cause",
    bannerImage:
      "https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    completedDuration: " 1 hr min",
    totalDuration: "3 days",
    progressValue: "67",
  },
];
const completed = [
  {
    chapterNumber: "2",
    chapterTitle: "How to start with App Development",
    courseName: "Full Stack Mobile Development Course by Code For Cause",
    bannerImage:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    completedDuration: "3 days",
    totalDuration: "3 days",
    progressValue: "100",
  },
];
function ProgressCourse() {
  const classes = useStyle();
  const buttonItems = [
    {
      status: "On Going",
      background: "#246A89",
      onPress: () => console.log("On going"),
    },
    {
      status: "Completed",
      background: "#3CB47E",
      onPress: () => console.log("Completed"),
    },
  ];
  const [status, setStatus] = useState("On Going");
  const setStatusFilter = (status) => {
    setStatus(status);
  };
  return (
    <Container className={classes.root}>
      <Box className={classes.titleContainer}>
        <Typography variant="h3">
          Course Progress
          <Typography variant="h3" component="span" style={{ color: "#808080" }}>
            {"  "}({status === "On Going" ? ongoingData.length : completed.length})
          </Typography>
        </Typography>
      </Box>
      <Box className={classes.buttonContainer}>
        {buttonItems.map((items, index) => (
          <Button
            key={index}
            className={classes.button}
            variant="contained"
            style={{ background: status === items.status ? "#150051" : "#8A80A8" }}
            onClick={() => setStatusFilter(items.status)}
          >
            <Typography variant="caption">{items.status}</Typography>
          </Button>
        ))}
      </Box>
      <Box className={classes.mediaCardContainer}>
        {status === "On Going"
          ? ongoingData.map((items, index) => (
              <CourseMediaCard
                key={index}
                chapterNumber={items.chapterNumber}
                chapterTitle={items.chapterTitle}
                courseName={items.courseName}
                bannerImage={items.bannerImage}
                completedDuration={items.completedDuration}
                totalDuration={items.totalDuration}
                progressValue={items.progressValue}
              />
            ))
          : completed.map((items, index) => (
              <CourseMediaCard
                key={index}
                chapterNumber={items.chapterNumber}
                chapterTitle={items.chapterTitle}
                courseName={items.courseName}
                bannerImage={items.bannerImage}
                completedDuration={items.completedDuration}
                totalDuration={items.totalDuration}
                progressValue={items.progressValue}
              />
            ))}
      </Box>
    </Container>
  );
}

export default ProgressCourse;
