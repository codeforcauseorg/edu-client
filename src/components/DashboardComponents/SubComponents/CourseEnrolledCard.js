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
  Button,
  LinearProgress,
} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import MovieCreationIcon from "@material-ui/icons/MovieCreation";
import React from "react";
import { useHistory } from "react-router";

function CourseEnrolledCard() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() => history.push("/course/:courseName/lecture/:videoSectionId:videoSectionName")}
      >
        <CardMedia
          component="img"
          className={classes.media}
          image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        />
        <CardContent className={classes.cardContent}>
          <Box classes={classes.tagSection}>
            <Chip variant="outlined" size="small" className={classes.tag} label="Web Development" />
          </Box>
          <Box className={classes.cardActions}>
            <LinearProgress className={classes.linearProgress} variant="determinate" value={75} />
            <Typography variant="h6" className={classes.title}>
              Full stack Web application Development Course By Code for Cause
            </Typography>
            <Box mt={2} className={classes.detailSection}>
              <Box className={classes.flexBox}>
                <AccessTimeIcon className={classes.accessTimeIcon} />
                <Typography noWrap>05 hr 02 min</Typography>
              </Box>
              <Box className={classes.flexBox}>
                <MovieCreationIcon className={classes.movieCreationIcon} />
                <Typography noWrap>16 lectures</Typography>
              </Box>
              <Box className={classes.flexBox}>
                <SignalCellularAltIcon className={classes.signalCellularIcon} />
                <Typography noWrap>Training</Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardFooter}>
        <Button onClick={() => history.push("/course/:id")}>Course Details</Button>
        <Box className={classes.avatarContainer}>
          {[1, 2].map((items, index) => (
            <Avatar
              key={index}
              src="assets/members/anuj.png"
              className={classes.avatar}
              onClick={() => console.log("mentors")}
            />
          ))}
        </Box>
        <Box style={{ flexGrow: 1 }} />
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
  linearProgress: {
    marginTop: theme.spacing(2),
  },

  title: {
    marginTop: theme.spacing(2),
  },
  media: {
    height: 150,
    transition: "0.5s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  tag: {
    borderRadius: "10px",
    background: "#DEEAFF",
    marginRight: theme.spacing(2),
    color: "#648BCF",
    border: "none",
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
  },
  avatarContainer: {
    display: "flex",
    color: theme.palette.primary.main,
    paddingLeft: theme.spacing(2),
  },
  avatar: {
    marginLeft: theme.spacing(0.8),
  },
  detailSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(1),
    },
  },
  cardFooter: {
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(1),
    },
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

export default CourseEnrolledCard;
