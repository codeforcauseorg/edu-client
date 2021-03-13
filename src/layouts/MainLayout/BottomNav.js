import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { HomeOutlined, PlayCircleOutline, AccountCircleOutlined, AddCircleOutlineOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Fade from "@material-ui/core/Fade";
import "./BottomNav.css";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Fade appear={true} direction="down" in={!trigger}>
      {children}
    </Fade>
  );
}

const useStyles = makeStyles({
  root: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default function BottomNav(props) {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <HideOnScroll {...props}>
      <AppBar className="cubic">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            history.push(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            label="Home"
            value="/home"
            icon={<HomeOutlined />}
          />
          <BottomNavigationAction
            label="My Classes"
            value="/personal"
            icon={<PlayCircleOutline />}
          />
          <BottomNavigationAction
            label="Wishlist"
            value="/wishlist"
            icon={<AddCircleOutlineOutlined />}
          />
          <BottomNavigationAction
            label="Profile"
            value="/profile"
            icon={<AccountCircleOutlined />}
          />
        </BottomNavigation>
      </AppBar>
    </HideOnScroll>
  );
}
