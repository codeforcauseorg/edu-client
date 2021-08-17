/* eslint-disable camelcase */
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
import { useHistory } from "react-router";

function ExploreMediaCard({ props }) {
  const classes = useStyles();

  const history = useHistory();

  const {
    courseLevel,
    courseThumbnail,
    tags,
    name,
    rating,
    reviews,
    mentor,
    no_of_enrollments,
    crossPrice,
    duration,
    video_num,
    _id,
  } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} title="title" image={courseThumbnail} />
        <CardContent className={classes.cardContent} onClick={() => history.push(`/course/${_id}`)}>
          <Box classes={classes.tagSection}>
            {tags.map((items, index) => (
              <Chip
                key={index}
                variant="outlined"
                size="small"
                className={classes.tag}
                label={items}
              />
            ))}
          </Box>
          <Box className={classes.cardActions}>
            <Typography variant="h6" className={classes.title}>
              {name}
            </Typography>
            <Box mt={1} className={classes.courseStatsContainer}>
              <Box className={classes.flexBox}>
                <Typography noWrap className={classes.ratingNumber}>
                  {rating}
                </Typography>
                <StarIcon className={classes.starIcon} />
                <Typography variant="body2" noWrap className={classes.totalRating}>
                  ({reviews.length})
                </Typography>
              </Box>
              <Box className={classes.studentsContainer}>
                <Typography variant="body2" noWrap className={classes.totalStudent}>
                  ({no_of_enrollments})
                </Typography>
                <Typography noWrap>Students</Typography>
              </Box>
            </Box>
            <Box mt={2} className={classes.detailSection}>
              <Box className={classes.flexBox}>
                <AccessTimeIcon className={classes.accessTimeIcon} />
                <Typography noWrap>{duration}</Typography>
              </Box>
              <Box className={classes.flexBox}>
                <MovieCreationIcon className={classes.movieCreationIcon} />
                <Typography noWrap>{video_num} lectures</Typography>
              </Box>
              <Box className={classes.flexBox}>
                <SignalCellularAltIcon className={classes.signalCellularIcon} />
                <Typography noWrap>{courseLevel}</Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardFooter}>
        <Box className={classes.avatarContainer}>
          {mentor.map((items, index) => (
            <Avatar
              key={index}
              src={items.mentorPhoto}
              className={classes.avatar}
              onClick={() => history.push(`/mentor/${items._id}`)}
            />
          ))}
        </Box>
        <Box style={{ flexGrow: 1 }} />
        <Chip size="small" className={classes.price} label={" ₹ " + crossPrice} />
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
      maxWidth: 330,
      marginRight: "10px",
    },
  },
  title: {
    marginTop: theme.spacing(2),
  },
  media: {
    height: 150,
    margin: theme.spacing(1),
    transition: "0.5s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  cardActions: {
    height: 110,
  },
  tag: {
    borderRadius: "10px",
    background: "#DEEAFF",
    marginRight: theme.spacing(2),
    color: "#648BCF",
    border: "none",
  },
  courseStatsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
  },
  totalRating: {
    marginLeft: theme.spacing(0.2),
  },
  totalStudent: {
    marginRight: theme.spacing(1),
  },
  avatarContainer: {
    display: "flex",
    color: theme.palette.primary.main,
    paddingLeft: theme.spacing(2),
  },

  price: {
    background: theme.palette.primary.main,
    borderRadius: "5px",
    color: "#fff",
  },
  avatar: {
    marginLeft: theme.spacing(0.8),
  },

  studentsContainer: {
    display: "flex",
  },
  detailSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(1),
    },
  },

  ratingNumber: {
    color: "#E4943F",
  },
  cardFooter: {
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(1),
    },
  },
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
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(0.5),
    },
  },
  signalCellularIcon: {
    height: 15,
    color: "#66AF78",
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(0.5),
    },
  },
}));

export default ExploreMediaCard;
