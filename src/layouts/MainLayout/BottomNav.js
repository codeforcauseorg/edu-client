<<<<<<< HEAD
import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {HomeOutlined, PlayCircleOutline, AccountCircleOutlined, AddCircleOutlineOutlined} from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';
=======
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
>>>>>>> 73e315749cd4c01d6402edc9d6ace824c9ca9c87

const useStyles = makeStyles({
  root: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default function BottomNav() {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  }

  useEffect(() => {
    if (location.pathname === '/home' && value !== "/home") {
      setValue("/home");
    }else if (location.pathname === '/personal' && value !== "/personal") {
      setValue("/personal");
    }else if (location.pathname === '/wishlist' && value !== "/wishlist") {
      setValue("/wishlist");
    }else if (location.pathname === '/profile' && value !== "/profile") {
      setValue("/profile");
    }
  },[value,location]);

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
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
  );
}
