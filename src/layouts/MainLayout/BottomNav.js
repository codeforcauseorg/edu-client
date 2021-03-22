import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {
  HomeOutlined,
  PlayCircleOutline,
  AccountCircleOutlined,
  AddCircleOutlineOutlined,
} from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import "./BottomNav.css";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.25)",
  },
});

export default function BottomNav(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <AppBar className="cubic">
      <BottomNavigation
        value={location.pathname}
        onChange={(event, location) => {
          history.push(location);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" value="/home" icon={<HomeOutlined />} />
        <BottomNavigationAction label="My Classes" value="/personal" icon={<PlayCircleOutline />} />
        <BottomNavigationAction
          label="Wishlist"
          value="/wishlist"
          icon={<AddCircleOutlineOutlined />}
        />
        <BottomNavigationAction label="Profile" value="/profile" icon={<AccountCircleOutlined />} />
      </BottomNavigation>
    </AppBar>
  );
}
