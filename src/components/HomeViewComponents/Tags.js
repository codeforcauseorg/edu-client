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
    <Container className={classes.container}>
      <Container className={classes.tagContainer}>
        {tagList.map((item, index) => (
          <Chip
            key={index}
            className={classes.tag}
            label={<Typography variant="body1">{item}</Typography>}
          ></Chip>
        ))}
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  tagContainer: {
    maxWidth: "95%",
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
    borderRadius: "5px",
    background: "#5848EA",
    color: "#fff",
    textTransform: "none",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      marginRight: ".5rem",
    },
  },
  container: {
    maxWidth: "100%",
    background: "#5848EA",
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
}));

export default Tags;
