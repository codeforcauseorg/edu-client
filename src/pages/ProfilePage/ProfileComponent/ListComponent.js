import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Switch as MuiSwitch,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTypography-h1": {
      marginLeft: theme.spacing(2),
      marginBottom: theme.spacing(2),
      fontSize: "25px",
      fontWeight: 600,
      color: "#0D0F44",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "0.8rem",
      color: "#120A85",
    },
    "& .MuiTypography-body1": {
      fontSize: "1rem",
      marginBottom: "5px",
      color: "#0D0F44",
      fontWeight: 600,
    },
    "& .MuiTypography-body2": {
      fontSize: "0.8rem",
      color: "#42607D",
      fontWeight: 500,
    },
    "& .MuiListItemIcon-root": {
      height: "24px",
      width: "24px",
      margin: "0px 13px 0px 13px",
    },
    "& .MuiSwitch-root": {
      overflow: "visible",
    },
  },
}));
const ActivityItems = [
  {
    id: 1,
    listItemIcon: "/assets/icon/messageIcon.svg",
    primary: "Doubt Forum",
    secondary: "A place for students to ask & discuss doubts.",
    onPress: () => { window.location.href='/peer' },
  },
  {
    id: 2,
    listItemIcon: "/assets/icon/interviewIcon.svg",
    primary: "Interview your friend",
    secondary: " Prepare yourself for an interview",
    onPress: () => console.log("Interview your friend"),
  },
  {
    id: 3,
    listItemIcon: "/assets/icon/statsIcon.svg",
    primary: "Contests and Statistics Dashboard",
    secondary: "View contests and statistics dashboard",
    onPress: () => console.log("Contests and Statistics Dashboard"),
  },
  {
    id: 4,
    listItemIcon: "/assets/icon/classroomIcon.svg",
    primary: "Classroom",
    secondary: "Manage your Classroom activities",
    onPress: () => console.log("Classroom"),
  },
];

const SettingsItems = [
  {
    id: 1,
    listItemIcon: "/assets/icon/darkmodeIcon.svg",
    primary: "Dark Mode",
    secondary: "Switch between Dark & light Mode",
    onPress: () => console.log("Dark Mode"),
    switch: true,
  },
  {
    id: 2,
    listItemIcon: "/assets/icon/languageIcon.svg",
    primary: "Language preference",
    secondary: "Select language of your choice",
    onPress: () => console.log("Language preference"),
  },
];
function ListComponent() {
  
  const [checked, setChecked] = React.useState(false);
  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List subheader={<Typography variant="h1">Activities</Typography>}>
        {ActivityItems.map((items) => (
          <ListItem button key={items.id} onClick={items.onPress}>
            <ListItemIcon>
              <img src={items.listItemIcon} />
            </ListItemIcon>
            <ListItemText primary={items.primary} secondary={items.secondary} />
            <ArrowForwardIosIcon />
          </ListItem>
        ))}
      </List>
      <List subheader={<Typography variant="h1">Settings</Typography>}>
        {SettingsItems.map((items) => (
          <ListItem button key={items.id} onClick={items.onPress}>
            <ListItemIcon>
              <img src={items.listItemIcon} />
            </ListItemIcon>
            <ListItemText primary={items.primary} secondary={items.secondary} />
            {items.switch ? (
              <MuiSwitch checked={checked} onChange={toggleChecked} />
            ) : (
              <ArrowForwardIosIcon />
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ListComponent;
