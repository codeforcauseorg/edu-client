import { Paper, makeStyles, Container, Box, Typography, Button } from "@material-ui/core";
import React from "react";

function HeaderItems({ title, description }) {
  const classes = useStyles();
  return (
    <Container className={classes.wrapperContainer}>
      <Paper className={classes.container}>
        <Box className={classes.infoContainer}>
          <Typography variant="h2">{title}</Typography>
          <Box mt={5} className={classes.description}>
            <Typography variant="h5">{description}</Typography>
            <Button className={classes.knowMoreButton}>Know more</Button>
          </Box>
        </Box>
        <Box className={classes.imageBox}>
          <img
            className={classes.image}
            src="https://cdn.pixabay.com/photo/2015/03/26/10/24/apple-691282__340.jpg"
          />
        </Box>
      </Paper>
    </Container>
  );
}
const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 400,
    display: "flex",
    flexDirection: "row",
    background: theme.palette.primary.main,
    boxShadow: "none",
  },
  wrapperContainer: {
    maxWidth: "100%",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  infoContainer: {
    position: "releative",
    background: theme.palette.primary.main,
    flex: "50%",
    color: "#fff",
    padding: theme.spacing(8),
  },
  description: {
    maxWidth: "30rem",
  },
  imageBox: {
    position: "relative",
    background: "#fff",
    minWidth: "50px",
    flex: "25%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "containe",
  },
  knowMoreButton: {
    position: "absolute",
    background: "#fff",
    textTransform: "none",
    bottom: 100,
    padding: theme.spacing(1, 3, 1, 3),
    "&:hover": {
      background: "#fff",
    },
    [theme.breakpoints.down("md")]: {
      bottom: 50,
      itemAligin: "center",
    },
  },
}));
export default HeaderItems;
