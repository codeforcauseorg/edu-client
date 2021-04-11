import React from "react";
import { useHistory } from "react-router-dom";
import { List, Typography, makeStyles } from "@material-ui/core";
import ActivityList from "./ActivityList";
import SettingList from "./SettingList";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTypography-h1": {
      marginLeft: theme.spacing(2),
      marginBottom: theme.spacing(2),
      color: "#0D0F44",
    },
  },
}));
export default function ListComponent() {
  const classes = useStyles();
  const history = useHistory();
  const openContests = () => {
    history.push("/contests");
  };
  const ActivityItems = [
    {
      id: 1,
      listItemIcon: "/assets/icon/messageIcon.svg",
      primary: "Doubt Forum",
      secondary: "A place for students to ask & discuss doubts.",
      onPress: () => {
        history.push("/peer");
      },
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
      listItemIcon: "/assets/icon/contest.png",
      primary: "View Contests",
      secondary: "Explore ongoing and upcoming contest",
      onPress: () => {
        openContests();
      },
    },
    {
      id: 4,
      listItemIcon: "/assets/icon/classroomIcon.svg",
      primary: "Classroom",
      secondary: "Manage your Classroom activities",
      collapse: true,
    },
    {
      id: 5,
      listItemIcon: "/assets/icon/achivements.png",
      primary: "My Achivements",
      secondary: "View your badges",
      onPress: () => console.log("My Achivements"),
    },
  ];
  const SettingsItems = [
    {
      id: 1,
      listItemIcon: "/assets/icon/darkmodeIcon.svg",
      primary: "Dark Mode",
      secondary: "Switch between Dark & light Mode",
      onPress: () => console.log("Dark Mode"),
      toggle: true,
    },
    {
      id: 2,
      listItemIcon: "/assets/icon/languageIcon.svg",
      primary: "Language preference",
      secondary: "Select language of your choice",
      onPress: () => console.log("Language preference"),
    },
  ];

  return (
    <div className={classes.root}>
      <List subheader={<Typography variant="h1">Activities</Typography>}>
        {ActivityItems.map((items, index) => (
          <ActivityList
            key={items.id}
            listItemIcon={items.listItemIcon}
            primary={items.primary}
            secondary={items.secondary}
            onPress={items.onPress}
            collapse={items.collapse}
          />
        ))}
      </List>
      <List subheader={<Typography variant="h1">Settings</Typography>}>
        {SettingsItems.map((items) => (
          <SettingList
            key={items.id}
            listItemIcon={items.listItemIcon}
            primary={items.primary}
            secondary={items.secondary}
            onPress={items.onPress}
            toggle={items.toggle}
          />
        ))}
      </List>
    </div>
  );
}
