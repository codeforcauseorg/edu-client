import {
  Avatar,
  Box,
  Collapse,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import React, { useState } from "react";

function AssignmentList({ props }) {
  const classes = useStyles();

  const { assignments } = props;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box className={classes.container}>
      <ListItem item button className={classes.listItem} onClick={handleClick}>
        <ListItemAvatar>
          <Avatar className={classes.avatar} src="assets/icon/assignment.png" />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={`Assignment (${assignments?.length})`} />
        {open ? <ExpandLess /> : <ExpandLess />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {assignments?.map((items, index) => (
          <SubAssignmentList key={index} index={index + 1} props={items} />
        ))}
      </Collapse>
    </Box>
  );
}

function SubAssignmentList({ index, props }) {
  const classes = useStyles();

  const { assignmenDescription, createdBy } = props;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar className={classes.subListAvatar}>
          <Typography>{index}</Typography>
        </Avatar>
      </ListItemAvatar>
      <ListItemText>
        <Typography>{assignmenDescription}</Typography>
        <Typography>{` By ` + createdBy}</Typography>
      </ListItemText>
    </ListItem>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#F8F9FD",
    borderRadius: "5px",
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  avatar: {
    borderRadius: "0px",
  },
  subListAvatar: {
    background: "#fff",
    color: theme.palette.text.primary,
    border: "2px dotted #333",
  },
  listItem: {
    "&:hover": {
      background: "#fff",
    },
  },
}));

export default AssignmentList;
