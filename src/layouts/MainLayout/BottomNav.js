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

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(newValue);
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
  );
}
