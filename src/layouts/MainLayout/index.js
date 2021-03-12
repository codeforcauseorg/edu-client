import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
// import TopBar from './TopBar';
import BottomNav from "./BottomNav";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

function MainLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <TopBar /> */}
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
