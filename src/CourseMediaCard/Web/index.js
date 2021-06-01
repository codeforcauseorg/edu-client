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
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import React from "react";

function MediaCardWeb({
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
            <Chip size="small" className={classes.price} label={price} />
          </Box>
          <Box className={classes.cardActions}>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Box className={classes.description}>
              <Typography variant="subtitle2">{description} </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardFooter}>
        <StarIcon className={classes.starIcon} />
        <Typography>{ratings}</Typography>
        <PlayCircleOutlineIcon />
        <Typography> {lessonsNumbers} Lessons</Typography>
        <Box style={{ flexGrow: 1 }} />
        <Box className={classes.lessons}>
          {mentors.map((items, index) => (
            <Avatar
              key={index}
              src={items.image}
              className={classes.avatar}
              onClick={() => console.log("mentors")}
            />
          ))}
        </Box>
      </CardActions>
    </Card>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: 0,
    boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.05)",
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
    height: 120,
  },
  media: {
    height: 150,
    transition: "0.5s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
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
}));

export default MediaCardWeb;
