import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {
  HomeOutlined,
  AccountCircleOutlined,
  AddCircleOutlineOutlined,
  EqualizerOutlined,
} from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import "./BottomNav.css";
import HelpOutline from "@material-ui/icons/HelpOutline";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.25)",
    margin: "auto",
  },
  navItem: {
    "& .MuiBottomNavigationAction-label": {
      whiteSpace: "nowrap",
    },
  },
});

export default function BottomNav(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <BottomNavigation
      value={location.pathname}
      onChange={(event, location) => {
        history.push(location);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.navItem} value="/home" icon={<HomeOutlined />} />

      <BottomNavigationAction
        className={classes.navItem}
        value="/doubt-forum"
        icon={<HelpOutline />}
      />

      <BottomNavigationAction
        className={classes.navItem}
        value="/wishlist"
        icon={<AddCircleOutlineOutlined />}
      />
      <BottomNavigationAction
        className={classes.navItem}
        value="/gamification-board"
        icon={<EqualizerOutlined />}
      />
      <BottomNavigationAction
        className={classes.navItem}
        value="/dashboard"
        icon={<AccountCircleOutlined />}
      />
    </BottomNavigation>
  );
}
