import {
  makeStyles,
  Box,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Collapse,
  Typography,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";

function AssignmentList() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <ListItem item button className={classes.listItem} onClick={handleClick}>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary="Web Development" secondary="Assignment (4)" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {[1, 2, 3].map((items, index) => (
          <SubAssignmentList key={index} />
        ))}
      </Collapse>
    </Box>
  );
}

function SubAssignmentList() {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText>
        <Typography>Assignment (1)</Typography>
        <Typography>Due Date: 31st August</Typography>
      </ListItemText>
    </ListItem>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#F8F9FD",
    borderRadius: "5px",
    padding: theme.spacing(4),
  },
  heading: {
    textTransform: "uppercase",
    color: theme.palette.text.primary,
    padding: theme.spacing(2),
  },
  divider: {
    width: "20%",
    height: "5px",
    marginTop: theme.spacing(1),
    borderRadius: "5px",
  },
}));

export default AssignmentList;
