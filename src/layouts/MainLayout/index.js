import PropTypes from "prop-types";
import { Hidden, makeStyles } from "@material-ui/core";
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
      <div className={classes.content}>{children}</div>
      <Hidden mdUp>
        <BottomNav />
      </Hidden>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
