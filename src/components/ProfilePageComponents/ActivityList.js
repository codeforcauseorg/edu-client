import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  makeStyles,
  Collapse,
  Typography,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiListItemIcon-root": {
      margin: "0px 10px 0px 10px",
    },
  },
  subList: {
    background: "#ECEFF2",
    borderRadius: 4,
  },
  primary: {
    marginBottom: theme.spacing(0.5),
  },
}));

function ActivityList({ listItemIcon, primary, secondary, onPress, collapse }) {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const openDashboard = () => {
    history.push("/dashboard");
  };
  const SubElements = [
    {
      id: 1,
      subElementsIcon: "/assets/icon/dashboard.png",
      subPrimary: "Student Dashboard",
      onPress: () => openDashboard(),
    },
  ];
  return (
    <Box className={classes.root}>
      <ListItem button onClick={collapse ? handleClick : onPress}>
        <ListItemIcon>
          <img src={listItemIcon} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="h5" className={classes.primary}>
            {primary}
          </Typography>
          <Typography variant="body1">{secondary}</Typography>
        </ListItemText>
        {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
      </ListItem>
      {collapse ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {SubElements.map((items, index) => (
            <SubElementList
              key={index}
              subElementsIcon={items.subElementsIcon}
              subPrimary={items.subPrimary}
              onPress={items.onPress}
            />
          ))}
        </Collapse>
      ) : (
        <Collapse />
      )}
    </Box>
  );
}

export default ActivityList;

function SubElementList({ subElementsIcon, subPrimary, onPress }) {
  const classes = useStyles();
  return (
    <List component="div" className={classes.subList}>
      <ListItem button onClick={onPress}>
        <ListItemIcon>
          <img src={subElementsIcon} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body2">{subPrimary}</Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
}
