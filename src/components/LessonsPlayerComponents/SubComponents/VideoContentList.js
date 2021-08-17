import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Typography,
  ListItem,
  ListItemText,
  IconButton,
  Collapse,
  Avatar,
  ListItemAvatar,
} from "@material-ui/core";
import VideoSubSectionList from "./VideoSubSectionList";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function VideoContentList({ props, index }) {
  const classes = useStyles();

  const [open, setopen] = useState(false);

  const handleChange = () => {
    setopen(!open);
  };

  const { chapterName, time, lecture } = props;
  console.log(props);

  return (
    <Box>
      <ListItem button className={classes.listItem} onClick={() => handleChange()}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <Typography>{index}</Typography>
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="h5" className={classes.courseTitle}>
            {chapterName}
          </Typography>
          <Box className={classes.subsection}>
            <Typography component="span" className={classes.duration}>
              {time}
            </Typography>
            <Typography variant="subtitle2" className={classes.resources}>
              Resources (1)
            </Typography>
          </Box>
        </ListItemText>
        <IconButton edge="end">
          {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </IconButton>
      </ListItem>
      <Collapse in={open}>
        {lecture.map((items, index) => (
          <VideoSubSectionList key={index} props={items} />
        ))}
      </Collapse>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.text.primary,
    borderRadius: "5px",
  },
  courseTitle: {
    fontWeight: 600,
  },
  listItem: {
    marginBottom: theme.spacing(2),
    borderRadius: "5px",
  },
  subsection: {
    display: "flex",
    alignItems: " center",
  },
  duration: {
    marginRight: theme.spacing(1),
  },
  resources: {
    marginRight: theme.spacing(1),
  },
  avatar: {
    border: "2px solid #000",
    background: "#fff",
    color: theme.palette.text.primary,
    height: 30,
    width: 30,
  },
}));

export default VideoContentList;
