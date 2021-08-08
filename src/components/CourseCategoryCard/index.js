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

function CourseCategoryCard({ props }) {
  const classes = useStyles();
  const { title, bannerImage, rating, tags } = props;
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={bannerImage} />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Box className={classes.actionContainer}>
          <Rating value={rating} precision={0.5} readOnly className={classes.ratingStar} />
          <Button className={classes.exploreButton}>Explore</Button>
        </Box>
        <Divider />
        <Box className={classes.chipcontainer}>
          {tags.map((items, index) => (
            <Chip className={classes.chip} key={index} label={<Typography>{items}</Typography>} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
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
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 330,
      marginRight: "10px",
    },
  },
  media: {
    height: 200,
    transition: "0.5s",
    margin: theme.spacing(1),
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
    background: theme.palette.success.main,
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
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
    padding: theme.spacing(1.2),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default CourseCategoryCard;
