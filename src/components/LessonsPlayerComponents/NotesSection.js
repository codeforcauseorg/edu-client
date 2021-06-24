import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import CardContainer from "../../components/cardContainer/cardContainer";
import NotesCard from "./SubComponents/NotesComponents/NotesCard";

function NotesSection() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h4">Notes(4)</Typography>
      <CardContainer>
        {[1, 2, 3, 4].map((items, index) => (
          <NotesCard key={index} />
        ))}
      </CardContainer>
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
}));
export default NotesSection;
