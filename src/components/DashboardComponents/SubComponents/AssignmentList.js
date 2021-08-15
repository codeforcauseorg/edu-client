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

function AssignmentList({ props }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  console.log(props);

  const { assignments, name } = props;

  return (
    <Box>
      <ListItem item button className={classes.listItem} onClick={handleClick}>
        <ListItemAvatar>
          <Avatar className={classes.avatar} src="assets/icon/assignment.png" />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={`Assignment (${assignments?.length})`} />
        {open ? <ExpandLess /> : <ExpandMore />}
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
