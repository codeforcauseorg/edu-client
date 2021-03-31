import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {
  HomeOutlined,
  PlayCircleOutline,
  ImportContactsOutlined,
  AccountCircleOutlined,
  AddCircleOutlineOutlined,
} from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import "./BottomNav.css";

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
    "& .MuiBottomNavigationAction-label.Mui-selected": {
      whitespace: "nowrap",
    },
    "& .MuiButtonBase-root": {
      whitespace: "nowrap",
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
      <BottomNavigationAction
        label="My Courses"
        value="/mycourses"
        icon={<ImportContactsOutlined />}
      />
      <BottomNavigationAction
        className={classes.navItem}
        label="Home"
        value="/home"
        icon={<HomeOutlined />}
      />

      <BottomNavigationAction
        className={classes.navItem}
        label="My Classes"
        value="/personal"
        icon={<PlayCircleOutline />}
      />

      <BottomNavigationAction
        className={classes.navItem}
        label="Wishlist"
        value="/wishlist"
        icon={<AddCircleOutlineOutlined />}
      />
      <BottomNavigationAction label="Profile" value="/profile" icon={<AccountCircleOutlined />} />
    </BottomNavigation>
  );
}
