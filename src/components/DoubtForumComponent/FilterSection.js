import { Box, makeStyles } from "@material-ui/core";
import React from "react";

function FilterSection() {
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 2,
    background: "#000",
    borderRadius: "5px",
  },
}));
export default FilterSection;
