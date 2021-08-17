import React from "react";
import {
  makeStyles,
  Typography,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import DescriptionIcon from "@material-ui/icons/Description";

function VideoSubSectionList({ props }) {
  const classes = useStyles();

  const { lectureName, time } = props;

  return (
    <ListItem button className={classes.listItem}>
      <ListItemAvatar>
        <Avatar className={classes.avatar}>
          <VideocamIcon className={classes.videoIcon} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText>
        <Typography variant="subtitle1" className={classes.courseTitle}>
          {lectureName}
        </Typography>
        <Box className={classes.subsection}>
          <Typography variant="subtitle1" className={classes.courseTitle}>
            {time} min
          </Typography>
          <DescriptionIcon className={classes.docIcon} />
        </Box>
      </ListItemText>
    </ListItem>
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
    background: "#F8F8F8",
  },
  avatar: {
    border: "2px solid #000",
    background: "#fff",
    color: theme.palette.text.primary,
    height: 30,
    width: 30,
  },
  videoIcon: {
    height: 20,
    color: theme.palette.action.active,
  },
  subsection: {
    display: "flex",
    alignItems: "center",
  },
  docIcon: {
    height: 18,
    marginLeft: theme.spacing(1),
    color: theme.palette.action.active,
  },
}));

export default VideoSubSectionList;
