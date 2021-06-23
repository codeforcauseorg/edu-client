import React from "react";
import { makeStyles, Typography, ListItem, ListItemText, IconButton } from "@material-ui/core";

function VideoSubSectionList() {
  const classes = useStyles();
  return (
    <ListItem button className={classes.listItem}>
      <ListItemText>
        <Typography variant="h5" className={classes.courseTitle}>
          Course Introduction
        </Typography>
      </ListItemText>
      <IconButton edge="end"></IconButton>
    </ListItem>
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

export default VideoSubSectionList;
