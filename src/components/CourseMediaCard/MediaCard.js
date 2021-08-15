/* eslint-disable camelcase */
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import React, { useRef } from "react";
import { useHistory } from "react-router";

function MediaCard({ props, isDeleteButton, onClick, enrolledCourse }) {
  const {
    _id,
    tags,
    name,
    courseThumbnail,
    crossPrice,
    courseShortDescription,
    rating,
    video_num,
    mentor,
  } = props;

  const classes = useStyles();

  const history = useHistory();

  const deleteButton = useRef();

  const handleDelete = (e) => {
    deleteButton.current.classList.add("removedItem");
    setTimeout(() => {
      onClick();
    }, 700);
  };

  return (
    <Card
      classes={{ root: classes.root, removedItem: classes.removedItem }}
      ref={deleteButton}
      style={{
        marginRight: isDeleteButton ? "0px" : "25px",
      }}
    >
      <CardHeader
        className={classes.media}
        style={{
          backgroundImage: `url(${courseThumbnail})`,
          backgroundSize: "cover",
        }}
        action={
          isDeleteButton ? (
            <IconButton className={classes.deleteButton} onClick={() => handleDelete()}>
              <DeleteOutlineIcon />
            </IconButton>
          ) : (
            <Box />
          )
        }
      />
      <CardActionArea>
        <CardContent
          className={classes.cardContent}
          onClick={() =>
            enrolledCourse
              ? history.push(`/enrolled-course/${_id}`)
              : history.push(`/course/${_id}`)
          }
        >
          <Box className={classes.tagSection}>
            <Chip
              size="small"
              className={classes.price}
              label={<Typography>₹ {crossPrice}</Typography>}
            />
          </Box>
          <Box className={classes.cardActions}>
            <Typography variant="h6" className={classes.title}>
              {name}
            </Typography>
            <Box className={classes.description}>
              <Typography variant="subtitle2">{courseShortDescription}</Typography>
            </Box>
            <Box mt={2} flexWrap="wrap">
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
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardFooter}>
        <StarIcon className={classes.starIcon} />
        <Typography>{rating}</Typography>
        <PlayCircleOutlineIcon />
        <Typography> {video_num} lectures</Typography>
        <Box style={{ flexGrow: 1 }} />
        <Box className={classes.lessons}>
          {mentor.map((items, index) => (
            <Avatar
              key={index}
              src={items.mentorPhoto}
              className={classes.avatar}
              onClick={() => history.push(`/mentor/${items._id}`)}
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
    maxWidth: 350,
    marginTop: theme.spacing(3),
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
    "&.removedItem": {
      animation: `$removed-item-animation 0.6s cubic-bezier(.55,-0.04,.91,.94) forwards`,
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
    flexWrap: "wrap",
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
    marginBottom: theme.spacing(0.5),
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
  deleteButton: {
    background: " rgba(0, 0, 0, 0.5)",
    color: "#fff",
    height: 35,
    width: 35,
    margin: 5,
    "&:hover": {
      background: " rgba(0, 0, 0, 0.5)",
    },
  },
  "@keyframes removed-item-animation": {
    "0%": {
      opacity: 1,
      transform: "scale(1)",
    },
    "100%": {
      opacity: 0,
      height: "0px",
      transform: "scale(0)",
    },
  },
}));

export default MediaCard;
