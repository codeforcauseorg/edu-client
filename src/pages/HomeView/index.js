import React from "react";
import Hero from "./Hero";
import NonHero from "./NonHero";
import Recommended from "./courses/Recommended";
import Search from "./Search";
import { makeStyles } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import ScrollTop from "../../components/backTop/index";

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

  return (
    <div>
      <Hero />
      <div id="back-to-top-anchor"></div>
      <NonHero />
      <Search />
      <Recommended />
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
