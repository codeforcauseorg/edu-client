import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
// import LinearProgress from "@material-ui/core/LinearProgress";

const navItemsLists = [
  { title: "Home", link: "/" },
  { title: "My Course", link: "/my-course" },
  { title: "Wishlist", link: "/wishlist" },
  { title: "Profile", link: "/profile" },
];
function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      {/* <LinearProgress /> */}
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h3" noWrap>
            Code for Cause
          </Typography>
          <SearchBar
            className={classes.search}
            placeholder="Search Course, Categories or mentors..."
            autoFocus
          />
          <div className={classes.grow} />
          <Box className={classes.listContainer}>
            {navItemsLists.map((item, index) => {
              return (
                <Button key={index}>
                  <Link smooth to={item.link} variant="h5" className={classes.textStyle}>
                    <Typography className={classes.listTitle} variant="h6" color="textPrimary">
                      {item.title}
                    </Typography>
                  </Link>
                </Button>
              );
            })}
          </Box>

          <div className={classes.sectionDesktop}>
            <Box className={classes.accountActions}>
              <Button className={classes.signIn}>
                <Typography>Sign In</Typography>
              </Button>
              <Button className={classes.signUp}>
                <Typography>Sign Up</Typography>
              </Button>
            </Box>
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
  searchButton: {
    marginRight: theme.spacing(2),
    padding: 0,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(2),
      display: "block",
    },
  },
  title: {
    display: "block",
    color: "#000",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  search: {
    position: "relative",
    borderRadius: "5px",
    boxShadow: "none",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 2),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  listContainer: {
    display: "flex",
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  signIn: {
    border: " 1px solid #3740A1",
    boxSizing: "border-box",
    borderRadius: "5px",
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2.5),
    textTransform: "none",
    padding: theme.spacing(1, 2, 1, 2),
  },
  signUp: {
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
  accountActions: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  avatar: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
}));

export default NavBar;
