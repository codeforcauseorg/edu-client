import React from "react";
import { Box, makeStyles, Avatar, Typography } from "@material-ui/core";

const instructorList = [
  {
    name: "Anuj Garg",
    image: "assets/members/anuj.png",
  },
  {
    name: "Ganga Chaturvedi",
    image: "assets/members/ganga.png",
  },
];

function Instructors() {
  const classes = useStyles();

  return (
    <Box mt={4} className={classes.root}>
      {instructorList.map((items, index) => (
        <>
          <Avatar key={index} className={classes.avatar} src={items.image} />
          <Box className={classes.textContainer}>
            <Typography className={classes.name}>{items.name}</Typography>
            <Typography className={classes.name}>Instructor</Typography>
          </Box>
        </>
      ))}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(5),
  },
  avatar: {
    height: 50,
    width: 50,
  },
}));

export default Instructors;
