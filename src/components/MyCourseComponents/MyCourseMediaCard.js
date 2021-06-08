import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ShareIcon from "@material-ui/icons/Share";
import { useHistory } from "react-router";

function MyCourseMediaCard() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} title="Android" image="assets/img/img3.PNG" />
          <CardContent className={classes.cardContent}>
            <Box classes={classes.tagSection}>
              <Chip variant="outlined" size="small" className={classes.tag} label="Android" />
              <Chip size="small" className={classes.price} label="₹1200" />
            </Box>
            <Box mt={2}>
              <Typography>12/65 lessons Completed</Typography>
            </Box>
            <Box mt={2}>
              <LinearProgress variant="determinate" value={40} />
            </Box>
            <Box className={classes.cardActions}>
              <Typography variant="h6" className={classes.title}>
                Full stack Web application Development Course By Code for Cause
              </Typography>
              <Box className={classes.description}>
                <Typography variant="subtitle2">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardFooter}>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <Button className={classes.detailsButton} onClick={() => history.push("/course/:id")}>
            <Typography noWrap>Course Details</Typography>
          </Button>
          <Box style={{ flexGrow: 1 }} />
          <Box className={classes.lessons}>
            {[1, 2].map((items, index) => (
              <Avatar
                key={index}
                src="assets/members/anuj.png"
                className={classes.avatar}
                onClick={() => console.log("mentors")}
              />
            ))}
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: 0,
    boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.25)",
    transition: "0.5s",
    cursor: "pointer",
    "&:hover": {
      top: "-10px",
    },
  },
  title: {
    marginTop: theme.spacing(2),
  },
  media: {
    height: 200,
    transition: "0.5s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
    },
    margin: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      height: 150,
    },
    [theme.breakpoints.down("lg")]: {
      height: 150,
    },
  },
  tagSection: {
    display: "flex",
  },
  ratings: {
    display: "flex",
    color: theme.palette.primary.main,
  },
  lessons: {
    display: "flex",
    color: theme.palette.primary.main,
    paddingLeft: theme.spacing(2),
  },
  cardFooter: {
    color: theme.palette.primary.main,
  },
  tag: {
    border: " 1px solid #3740A1",
    borderRadius: "5px",
    background: "#fff",
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  price: {
    background: theme.palette.primary.main,
    borderRadius: "5px",
    color: "#fff",
  },
  description: {
    marginTop: theme.spacing(1),
  },
  avatar: {
    marginLeft: theme.spacing(0.8),
  },
  detailsButton: {
    textTransform: "none",
  },
}));

export default MyCourseMediaCard;
