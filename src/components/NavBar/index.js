import {
  AppBar,
  Avatar,
  Box,
  Button,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import LinearProgress from "@material-ui/core/LinearProgress";

const navItemsLists = [
  { title: "Home", link: "/" },
  { title: "My Course", link: "/my-course" },
  { title: "Wishlist", link: "/wishlist" },
  { title: "Profile", link: "/profile" },
];
function NavBar() {
  const classes = useStyles();
  const [scrollPositions, setscrollPositions] = useState(0);

  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = getDocHeight();
    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);
    setscrollPositions(scrollPostion);
  };

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  useEffect(() => {
    listenToScrollEvent();
  });

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <LinearProgress variant="determinate" value={scrollPositions} />
        <Toolbar className={classes.appBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Hidden mdDown>
            <Typography className={classes.title} variant="h3" noWrap>
              Code for Cause
            </Typography>
          </Hidden>
          <SearchBar
            className={classes.search}
            placeholder="Search Course, Categories or mentors..."
          />
          <div className={classes.grow} />
          <Hidden lgDown>
            <Box className={classes.listContainer}>
              {navItemsLists.map((item, index) => {
                return (
                  <Button key={index}>
                    <Link smooth to={item.link} variant="h5" className={classes.textStyle}>
                      <Typography
                        noWrap
                        className={classes.listTitle}
                        variant="h6"
                        color="textPrimary"
                      >
                        {item.title}
                      </Typography>
                    </Link>
                  </Button>
                );
              })}
            </Box>
          </Hidden>

          <div className={classes.sectionDesktop}>
            <Hidden mdDown>
              <Button className={classes.signInButton}>
                <Typography noWrap>Sign In</Typography>
              </Button>
              <Button className={classes.signUpButton}>
                <Typography noWrap>Sign Up</Typography>
              </Button>
            </Hidden>
          </div>
          <Avatar
            className={classes.avatar}
            src="https://media-exp1.licdn.com/dms/image/C560BAQHSXxzxdL45FA/company-logo_200_200/0/1588676153700?e=2159024400&v=beta&t=PEiMBARAmeCUpRrAuJZWev-F_oCZac_OunmUXcLuY5U"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    [theme.breakpoints.down("md")]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  grow: {
    flexGrow: 1,
    "& .MuiLinearProgress-colorPrimary": {
      backgroundColor: "rgb(255, 255, 255)",
    },
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(2),
      display: "flex",
    },
  },
  title: {
    display: "block",
    color: "#000",
  },
  search: {
    position: "relative",
    borderRadius: "5px",
    boxShadow: "none",
    marginRight: theme.spacing(2),
    width: "100%",
    height: " 38px",
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(50),
      height: " 48px",
      marginLeft: theme.spacing(5),
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 2),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  sectionDesktop: {
    display: "flex",
  },
  listContainer: {
    display: "flex",
    marginRight: theme.spacing(5),
  },
  signInButton: {
    border: " 1px solid #3740A1",
    boxSizing: "border-box",
    borderRadius: "5px",
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2.5),
    textTransform: "none",
    padding: theme.spacing(1, 2, 1, 2),
  },
  signUpButton: {
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.main,
    },
    borderRadius: "5px",
    color: "#fff",
    textTransform: "none",
    padding: theme.spacing(1, 2, 1, 2),
  },
  textStyle: {
    textDecoration: "none",
  },
  avatar: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
}));

export default NavBar;
