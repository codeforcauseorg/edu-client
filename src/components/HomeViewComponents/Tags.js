import { Chip, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const tagList = [
  "Web Development",
  "Android Dev",
  "AI",
  "ML",
  "Devops",
  "NextJS",
  "React",
  "Programming",
  "Android",
  "Kotlin",
  "C/C++",
  "Python",
];

function Tags() {
  const classes = useStyles();

  return (
    <Container className={classes.wrapperContainer}>
      <div className={classes.tagContainer}>
        {tagList.map((item, index) => (
          <Chip
            key={index}
            className={classes.tag}
            label={<Typography variant="body1">{item}</Typography>}
          ></Chip>
        ))}
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  tagContainer: {
    marginBottom: "1rem",
    paddingTop: "1rem",
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  tag: {
    marginRight: "10px",
    border: "2px solid #3740A1",
    borderRadius: "5px",
    color: theme.palette.primary.main,
    backgroundColor: "#fff",
    textTransform: "none",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      marginRight: ".5rem",
    },
  },
  wrapperContainer: {
    maxWidth: "90%",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
}));
export default Tags;
