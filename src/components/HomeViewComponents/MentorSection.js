import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import TeamCard from "../TeamCard";

const mentorList = [
  {
    image: "assets/members/amit.png",
    name: "Amit Kumar",
  },

  {
    image: "assets/members/anuj.png",
    name: "Anuj Garg",
  },

  {
    image: "assets/members/kunal.png",
    name: "Kunal Kushwaha ",
  },
  {
    image: "assets/members/ganga.png",
    name: "Ganga Chaturvedi",
  },
  {
    image: "assets/members/ekta.png",
    name: "Ekta Mishra",
  },
  {
    image: "assets/members/abhishek.jpg",
    name: "Abhishek Kumar",
  },
  {
    image: "assets/members/nityanand.png",
    name: "Nityanand Rai",
  },
  {
    image: "assets/members/vasu.jpeg",
    name: "Vasudev Singhal",
  },
  {
    image: "assets/members/bharat.png",
    name: "Bharat Kumar",
  },
];

function MentorSection() {
  const classes = useStyles();
  return (
    <Box pt={10} className={classes.root}>
      <Container className={classes.titleContainer}>
        <Box>
          <Typography variant="h1" className={classes.subTitle}>
            Our team member
          </Typography>
          <Box mt={3}>
            <Typography variant="h5">
              These are the people who work every day to create great learning content that will
              help you in growing your skills .
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container className={classes.gridContainer}>
        <Grid spacing={3} align="center" container justify="center">
          {mentorList.map((items, index) => (
            <TeamCard key={index} image={items.image} name={items.name} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 750,
  },
  titleContainer: {
    textAlign: "center",
  },
  gridContainer: {
    marginTop: theme.spacing(10),
    maxWidth: "85%",
    [theme.breakpoints.between("md")]: {
      maxWidth: "none",
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "none",
    },
  },
  subTitle: {
    color: theme.palette.primary.main,
  },
}));

export default MentorSection;
