import React from "react";
import {
  makeStyles,
  Box,
  Typography,
  ListItem,
  ListItemText,
  IconButton,
  Collapse,
} from "@material-ui/core";
import VideoSubSectionList from "./VideoSubSectionList";

function VideoContentList() {
  const classes = useStyles();
  return (
    <Box>
      <ListItem button className={classes.listItem}>
        <ListItemText>
          <Typography variant="h5" className={classes.courseTitle}>
            Course Introduction
          </Typography>
        </ListItemText>
        <IconButton edge="end"></IconButton>
        <Collapse>
          {[1, 2, 3].map((items, index) => (
            <VideoSubSectionList key={index} />
          ))}
        </Collapse>
      </ListItem>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  ListContainer: {
    flex: 2,
    height: 800,
    marginLeft: theme.spacing(3),
  },
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
    "&:hover": {
      background: "linear-gradient(90.28deg, #2A5EDA -20.31%, #4379FE 104.28%)",
      color: "#fff",
    },
  },
}));

export default VideoContentList;
