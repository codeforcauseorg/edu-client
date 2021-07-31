import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";

function CourseCategoryCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image="assets/img/webDevelopmentBanner.svg" />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Web Development
        </Typography>
        <Box className={classes.actionContainer}>
          <Rating value={4.0} precision={0.5} readOnly className={classes.ratingStar} />
          <Button className={classes.exploreButton}>Explore</Button>
        </Box>
        <Divider />
        <Box className={classes.chipcontainer}>
          {[1, 2, 3, 4, 5, 6].map((items, index) => (
            <Chip className={classes.chip} key={index} label={<Typography>React</Typography>} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: 0,
    boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.11)",
    transition: "0.5s",
    cursor: "pointer",
    marginTop: theme.spacing(3),
    maxWidth: 350,
    marginRight: "25px",
    borderRadius: "5px",
    flex: "0 0 auto",
    "&:hover": {
      boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.25)",
      top: "-10px",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 330,
      marginRight: "10px",
    },
  },
  media: {
    height: 200,
    transition: "0.5s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  chipcontainer: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    borderRadius: "5px",
    background: theme.palette.primary.main,
    color: "#fff",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  actionContainer: {
    margin: theme.spacing(2, 0),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  exploreButton: {
    background: "linear-gradient(97.46deg, #6EE2F5 -62.66%, #6454F0 157.91%)",
    color: "#ffffff",
    borderRadius: "15px",
    padding: theme.spacing(1.2),
  },
}));

export default CourseCategoryCard;
