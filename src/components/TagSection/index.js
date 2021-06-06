import { Box, Chip, makeStyles } from "@material-ui/core";
import React from "react";

function TagSection(props) {
  const classes = useStyles();
  return (
    <Box p={2} className={classes.container}>
      {[1, 2, 3, 4, 5, 6, 7].map((items, index) => (
        <Chip key={index} label="React" className={classes.chip} />
      ))}
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#F8F8F8",
    marginTop: theme.spacing(2),
    borderRadius: "5px",
  },
  chip: {
    border: "2px solid #3740A1",
    borderRadius: "5px",
    background: "#fff",
    cursor: "pointer",
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(0.8),
    marginTop: theme.spacing(0.8),
  },
}));

export default TagSection;
