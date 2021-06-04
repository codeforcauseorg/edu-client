import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  makeStyles,
  Typography,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import MovieCreationIcon from "@material-ui/icons/MovieCreation";
import React from "react";

function ExploreMediaCard({
  title,
  description,
  ratings,
  lessonsNumbers,
  courseImage,
  tag,
  price,
  mentors,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} title={title} image={courseImage} />
        <CardContent className={classes.cardContent}>
          <Box classes={classes.tagSection}>
            <Chip variant="outlined" size="small" className={classes.tag} label={tag} />
          </Box>
          <Box className={classes.cardActions}>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Box mt={1} className={classes.courseStats}>
              <Box className={classes.ratings}>
                <Typography noWrap className={classes.ratingNumber}>
                  4.4
                </Typography>
                <StarIcon className={classes.starIcon} />
                <Typography variant="body2" noWrap className={classes.totalRating}>
                  (8,200)
                </Typography>
              </Box>
              <Box className={classes.enrollStudents}>
                <Typography variant="body2" noWrap className={classes.totalStudent}>
                  8,547
                </Typography>
                <Typography noWrap>Students</Typography>
              </Box>
            </Box>
            <Box mt={2} className={classes.detailSection}>
              <Box className={classes.ratings}>
                <AccessTimeIcon className={classes.accessTimeIcon} />
                <Typography noWrap>05 hr 02 min</Typography>
              </Box>
              <Box className={classes.ratings}>
                <MovieCreationIcon className={classes.movieCreationIcon} />
                <Typography noWrap>16 lectures</Typography>
              </Box>
              <Box className={classes.ratings}>
                <SignalCellularAltIcon className={classes.signalCellularIcon} />
                <Typography noWrap>Training</Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardFooter}>
        <Box className={classes.avatarContainer}>
          {mentors.map((items, index) => (
            <Avatar
              key={index}
              src={items.image}
              className={classes.avatar}
              onClick={() => console.log("mentors")}
            />
          ))}
        </Box>
        <Box style={{ flexGrow: 1 }} />
        <Chip size="small" className={classes.price} label={price} />
      </CardActions>
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
      maxWidth: 320,
      marginRight: "10px",
    },
  },
  title: {
    marginTop: theme.spacing(2),
  },
  cardActions: {
    height: 110,
  },
  media: {
    height: 150,
    margin: theme.spacing(2),
    transition: "0.5s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  ratings: {
    display: "flex",
    alignItems: "center",
  },
  avatarContainer: {
    display: "flex",
    color: theme.palette.primary.main,
    paddingLeft: theme.spacing(2),
  },
  tag: {
    borderRadius: "10px",
    background: "#DEEAFF",
    marginRight: theme.spacing(2),
    color: "#648BCF",
    border: "none",
  },
  price: {
    background: theme.palette.primary.main,
    borderRadius: "5px",
    color: "#fff",
  },
  avatar: {
    marginLeft: theme.spacing(0.8),
  },
  courseStats: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  enrollStudents: {
    display: "flex",
  },
  detailSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalRating: {
    marginLeft: theme.spacing(0.2),
  },
  totalStudent: {
    marginRight: theme.spacing(1),
  },
  ratingNumber: {
    color: "#E4943F",
  },
  /* All card icons */

  starIcon: {
    height: 15,
    color: "#E4943F",
  },
  accessTimeIcon: {
    height: 15,
    color: "#EAA2A3",
  },
  movieCreationIcon: {
    height: 15,
    color: "#EEB983",
  },
  signalCellularIcon: {
    height: 15,
    color: "#66AF78",
  },
}));

export default ExploreMediaCard;
