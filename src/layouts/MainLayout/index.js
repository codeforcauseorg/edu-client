import PropTypes from "prop-types";
import { Hidden, makeStyles } from "@material-ui/core";
import NavBar from "../../components/NavBar/index";
import BottomNav from "./BottomNav";
import FooterSection from "../../components/HomeViewComponents/FooterSection";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
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
      <NavBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
      <FooterSection />
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
