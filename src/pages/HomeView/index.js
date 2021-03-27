import Hero from "./Hero";
import ScrollToTop from "../../utils/ScrollToTop";
import NonHero from "./NonHero";
import { makeStyles } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import ScrollTop from "../../components/backTop/index";

const useStyles = makeStyles((theme) => ({
  backtotop: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
}));

export default function HomeView(props) {
  const classes = useStyles();

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
