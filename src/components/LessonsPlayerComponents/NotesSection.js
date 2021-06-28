import React from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import NotesCard from "./SubComponents/NotesComponents/NotesCard";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

function NotesSection() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.titleContainer}>
        <Typography variant="h4">Notes(4)</Typography>
        <Button className={classes.notesButton}>
          Add Notes
          <NoteAddIcon />
        </Button>
      </Box>
      <Box className={classes.cardContainer}>
        {[1, 2, 3, 4].map((items, index) => (
          <NotesCard key={index} />
        ))}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(4),
    borderRadius: "5px",
  },
  cardContainer: {
    overflow: "auto",
    minheight: "80px",
    padding: "20px 10px",
    paddingBottom: "50px",
    display: "flex",
    flexWrap: "no-wrap",
    marginTop: "10px",
    marginBottom: "10px",
    scrollbarWidth: "none" /* mozilla */,
    "&::-webkit-scrollbar": {
      display: "none" /* Safari and Chrome browsers */,
    },
    [theme.breakpoints.down("lg")]: {
      display: "Block",
    },
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  notesButton: {
    textTransform: "none",
    background: "linear-gradient(90.28deg, #2A5EDA -20.31%, #4379FE 104.28%)",
    color: "#fff",
  },
}));
export default NotesSection;
