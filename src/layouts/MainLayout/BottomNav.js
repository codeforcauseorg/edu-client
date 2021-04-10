import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { useHistory, useLocation } from "react-router";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./BottomNav.css";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "8vh",
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    boxShadow: "0 -2px 50px 0 rgba(0, 0, 0, 0.3)",
    padding: theme.spacing(1, 0),
    margin: "auto",
    borderRadius: "20px 20px 0 0",
  },
  navItem: {
    color: "rgba(0,0,0,0.54)",
    "& .MuiBottomNavigationAction-label": {
      whiteSpace: "nowrap",
      fontSize: "0.8rem",
      fontWeight: 600,
    },
  },
}));

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
        className={classes.navItem}
        label="Home"
        value="/home"
        icon={<HomeIcon />}
      />

      <BottomNavigationAction
        className={classes.navItem}
        label="My Courses"
        value="/mycourses"
        icon={<MenuBookIcon />}
      />

      <BottomNavigationAction
        className={classes.navItem}
        label="Wishlist"
        value="/wishlist"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        className={classes.navItem}
        label="Profile"
        value="/profile"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
}
