import { useEffect } from "react";
import Hero from "./Hero";
import ScrollToTop from "../../utils/ScrollToTop";
import NonHero from "./NonHero";
import { makeStyles } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import ScrollTop from "../../components/backTop/index";
import { Plugins } from "@capacitor/core";
const { SplashScreen } = Plugins;

const useStyles = makeStyles((theme) => ({
  backtotop: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },
}));

export default function HomeView(props) {
  const classes = useStyles();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Hero />
      <div id="back-to-top-anchor"></div>
      <NonHero />
      <div className={classes.backtotop}>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
    </div>
  );
}
