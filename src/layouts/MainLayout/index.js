import PropTypes from "prop-types";
import { Hidden, makeStyles } from "@material-ui/core";
import NavBar from "../../components/NavBar/index";
import BottomNav from "./BottomNav";
import FooterSection from "../../components/HomeViewComponents/FooterSection";
import AdBanner from "../../components/AdBannerComponent/AdBanner";
import { useState } from "react";

function MainLayout({ children }) {
  const classes = useStyles();
  const [show, setshow] = useState(true);

  const handleClick = () => {
    setshow(false);
  };

  return (
    <div className={classes.root}>
      {show ? <AdBanner handleClick={() => handleClick()} /> : ""}
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

export default MainLayout;
