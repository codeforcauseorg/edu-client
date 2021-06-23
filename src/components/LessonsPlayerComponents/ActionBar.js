import React from "react";
import { makeStyles, Box, Button } from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import FlagIcon from "@material-ui/icons/Flag";
import ShareIcon from "@material-ui/icons/Share";

function ActionBar() {
  const classes = useStyles();

  const actionButtonElements = [
    {
      icon: FlagIcon,
      title: " Report a Problem",
      onClick: () => console.log(""),
    },
    {
      icon: ShareIcon,
      title: " Share",
      onClick: () => console.log(""),
    },
  ];

  return (
    <Box className={classes.container}>
      <Box>
        <Button className={classes.notesButton}>
          Save Notes
          <NoteAddIcon className={classes.icon} />
        </Button>
      </Box>
      <Box>
        {actionButtonElements.map((items, index) => (
          <Button key={index} className={classes.actionButton} onClick={items.onClick}>
            <items.icon className={classes.icon} />
            {items.title}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  actionButton: {
    textTransform: "none",
  },
  icon: {
    height: 20,
    margin: theme.spacing(0.5),
  },
  notesButton: {
    textTransform: "none",
    background: "linear-gradient(90.28deg, #2A5EDA -20.31%, #4379FE 104.28%)",
    color: "#fff",
  },
}));

export default ActionBar;
