import { Button, Hidden, makeStyles, Typography } from "@material-ui/core";
import React from "react";

function BrowseAllButton(rest) {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.browseAllButton} {...rest}>
        <Typography>
          <Hidden smDown>Browse All</Hidden>
          <Hidden smUp>View All</Hidden>
        </Typography>
      </Button>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  browseAllButton: {
    background: " #FFFFFF",
    border: " 2px solid #3740A1",
    borderRadius: "30px",
    color: theme.palette.primary.main,
    textTransform: "none",
    padding: theme.spacing(1, 3, 1, 3),
    [theme.breakpoints.down("sm")]: {
      border: "none",
      borderRadius: "0px",
    },
  },
}));

export default BrowseAllButton;
