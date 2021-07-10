import { Box, Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CheckoutCourseList from "./SubComponents/CheckoutCourseList";

function CheckoutCourse() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h4">Course in Cart (2)</Typography>
      <Divider className={classes.divider} />
      {[1, 2, 3].map((items, index) => (
        <CheckoutCourseList key={index} />
      ))}
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    margin: theme.spacing(4),
    padding: theme.spacing(4, 4),
    borderRadius: "5px",
    flex: 8,
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0),
      padding: theme.spacing(2, 2),
    },
  },
  divider: {
    marginTop: theme.spacing(2),
  },
}));

export default CheckoutCourse;
