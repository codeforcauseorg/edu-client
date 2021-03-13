import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import { AppBar, Box, Hidden, Toolbar, Typography, makeStyles } from "@material-ui/core";
import Item from "./Item";
import Account from "./Account";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { HashLink as Link } from "react-router-hash-link";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    backgroundColor: theme.palette.background.default,
    paddingLeft: 70,
    paddingRight: 70,
    top: "auto",
    [theme.breakpoints.down("md")]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  toolbar: {
    minHeight: 64,
    maxHeight: 64,
  },
  menuButton: {
    float: "right",
    color: "#000",
    marginRight: "0px",
  },
  list: {
    width: "100% !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    textDecoration: "none",
  },
}));

function TopBar({ className, onMobileNavOpen, ...rest }) {
  const classes = useStyles();
  const user = useSelector((state) => state.account.user);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const pathname = window.location.pathname;

  const navItems = [
    { title: "MERN Scholarship", link: "/special-practical-webdev-with-js" },
    { title: "Campus Leaders", link: "/campusLeaders" },
    { title: "Events", link: "/events" },
    { title: "Courses", link: "/courses" },
  ];

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      <List>
        {navItems.map((item, index) => {
          return (
            <ListItem button key={index}>
              <Link smooth to={item.link} variant="h5" className={classes.textStyle}>
                <Typography variant="h4" color="textPrimary">
                  {item.title}
                </Typography>
              </Link>
            </ListItem>
          );
        })}
        {!user ? (
          <ListItem>
            <Account />
          </ListItem>
        ) : (
          <div />
        )}
      </List>
    </div>
  );
  const headerMoblie = () => (
    <div>
      <RouterLink
        to="/"
        onClick={toggleDrawer("right", false)}
        style={{ position: "absolute", left: "20px", top: "3%" }}
      >
        {/* <Logo className={classes.logo} /> */}
      </RouterLink>
      <Box ml={8}>
        <IconButton
          edge="end"
          className={classes.menuButton}
          aria-label="menu"
          onClick={toggleDrawer("right", false)}
          style={{ position: "absolute", right: "15px", top: "1%" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </div>
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">{/* <Logo className={classes.logo} /> */}</RouterLink>
        <Hidden smDown>
          <Box ml={2} flexGrow={1} />
          {navItems.map((item, index) => {
            return (
              <Item
                key={index}
                active={item.link === pathname}
                title={item.title}
                link={item.link}
              />
            );
          })}
          <Box ml={2} flexGrow={0.05} />
          <Box ml={2}>
            <Account />
          </Box>
          <Box ml={2} flexGrow={0.05} />
        </Hidden>
        <Hidden mdUp>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            style={{ position: "absolute", right: "0px" }}
          >
            {user ? <Account /> : <div />}
            <IconButton
              edge="end"
              className={classes.menuButton}
              aria-label="menu"
              onClick={toggleDrawer("right", true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Drawer
            width={"100%"}
            anchor="right"
            open={state.right}
            onClose={toggleDrawer("right", false)}
          >
            {headerMoblie()}
            {list()}
          </Drawer>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
