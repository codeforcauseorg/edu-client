import { Paper, makeStyles, Container, Box, Typography, Button, Hidden } from "@material-ui/core";
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
        <Hidden mdDown>
          <Box className={classes.imageBox}>
            <img
              className={classes.image}
              src="https://cdn.pixabay.com/photo/2015/03/26/10/24/apple-691282__340.jpg"
            />
          </Box>
        </Hidden>
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
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      borderRadius: "0px",
    },
  },
  wrapperContainer: {
    maxWidth: "100%",
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      padding: 0,
      marginTop: theme.spacing(7),
    },
  },
  infoContainer: {
    position: "releative",
    background: theme.palette.primary.main,
    flex: "50%",
    color: "#fff",
    padding: theme.spacing(8),
    borderRadius: "10px",
  },
  description: {
    maxWidth: "30rem",
  },
  imageBox: {
    position: "relative",
    background: "#fff",
    minWidth: "50px",
    flex: "25%",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "containe",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
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
