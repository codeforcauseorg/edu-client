import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import FadeReveal from "../Animation";
import TeamCard from "../TeamCard";

const mentorList = [
  {
    image: "assets/members/amit.png",
  },

  {
    image: "assets/members/anuj.png",
  },

  {
    image: "assets/members/kunal.png",
  },
  {
    image: "assets/members/ganga.png",
  },
  {
    image: "assets/members/ekta.png",
  },
  {
    image: "assets/members/abhishek.jpg",
  },
  {
    image: "assets/members/nityanand.png",
  },
  {
    image: "assets/members/vasu.jpeg",
  },
  {
    image: "assets/members/bharat.png",
  },
];

function MentorSection() {
  const classes = useStyles();
  return (
    <Box pt={10} className={classes.root}>
      <FadeReveal>
        <Container className={classes.titleContainer}>
          <Box>
            <Typography variant="h5">Our Team</Typography>
            <Typography variant="h1" className={classes.subTitle}>
              Meet Our team
            </Typography>
          </Box>
        </Container>
        <Container className={classes.gridContainer}>
          <Grid spacing={5} align="center" container justify="center">
            {mentorList.map((items, index) => (
              <TeamCard key={index} image={items.image} />
            ))}
          </Grid>
        </Container>
      </FadeReveal>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 750,
    backgroundColor: "#F6F7F8",
  },
  titleContainer: {
    textAlign: "center",
  },
  gridContainer: {
    marginTop: theme.spacing(10),
    maxWidth: "85%",
  },
  subTitle: {
    color: theme.palette.primary.main,
  },
}));

export default MentorSection;
