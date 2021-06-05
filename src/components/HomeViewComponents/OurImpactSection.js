import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Fade from "react-reveal/Fade";

const listItems = [
  {
    title: "Students",
    value: "5k",
    image: "assets/VectorGraphics/students.svg",
  },
  {
    title: "Teaching Hours",
    value: "3.2k",
    image: "assets/VectorGraphics/teaching_hours.svg",
  },
  {
    title: "Projects",
    value: "1k",
    image: "assets/VectorGraphics/projects.svg",
  },
  {
    title: "Contributors",
    value: "5k",
    image: "assets/VectorGraphics/contributors.svg",
  },
  {
    title: "Youtube",
    value: "60k",
    image: "assets/VectorGraphics/youtube.svg",
  },
];
function OurImpactSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.textContainer}>
          <Typography variant="h1" className={classes.title}>
            Our Impact
          </Typography>
          <Box mt={5}>
            <Typography variant="h5" className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Typography>
          </Box>
          <Button className={classes.learningButton}>
            <Typography variant="h4"> Start Learning</Typography>
          </Button>
        </Box>
        <Fade bottom>
          <Box className={classes.cardContainer}>
            <Grid spacing={5} align="center" container justify="center">
              {listItems.map((items, index) => (
                <Grid key={index} lg={4}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Box className={classes.cardItems}>
                        <Typography variant="h5">{items.title}</Typography>
                        <Box mt={2}>
                          <Typography variant="h1" component="span">
                            {items.value}
                            <Typography variant="h1" component="span" className={classes.spanText}>
                              +
                            </Typography>
                          </Typography>
                        </Box>
                        <img className={classes.image} src={items.image} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 650,
    background: "#FCFCFC",
    paddingTop: theme.spacing(15),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: "85%",
    [theme.breakpoints.down("md")]: {
      display: "block",
      maxWidth: "90%",
    },
  },
  cardContainer: {
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(8),
    },
  },
  card: {
    position: "relative",
    margin: theme.spacing(1),
    boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.08)",
    minHeight: 150,
    minWidth: 120,
    [theme.breakpoints.down("md")]: {
      margin: 5,
      maxHeight: 150,
      maxWidth: 175,
    },
  },
  textContainer: {
    maxWidth: "38%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  title: {
    color: theme.palette.primary.main,
  },
  learningButton: {
    marginTop: theme.spacing(8),
    color: "#fff",
    textTransform: "none",
    background: theme.palette.primary.main,
    padding: theme.spacing(2),
    "&:hover": {
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(4),
      padding: theme.spacing(1),
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
    [theme.breakpoints.down("md")]: {
      height: 50,
    },
    [theme.breakpoints.down("lg")]: {
      height: 50,
    },
  },
  cardItems: {
    textAlign: "left",
  },
  spanText: {
    color: theme.palette.primary.main,
  },
}));

export default OurImpactSection;
