import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  Popper,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AsyncSelect from "react-select/async";
import ShopIcon from "@material-ui/icons/Shop";
import { logoutAction } from "../../services/authService";
import AdBanner from "../../components/AdBannerComponent/AdBanner";
import useSWR from "swr";
import { ALL_COURSE_CARD_ENDPOINT, USER_CART_ENDPOINT } from "../../constants/apiEndpoints";
import { loadData } from "../../services/apiService";

const navItemsLists = [
  { title: "Home", link: "/" },
  { title: "Forum", link: "/doubt-forum" },
  { title: "Wishlist", link: "/wishlist" },
  { title: "Gamification", link: "/gamification-board" },
  { title: "Dashboard", link: "/dashboard" },
];

function NavBar() {
  const classes = useStyles();

  const history = useHistory();

  const user = useSelector((state) => state.account.user);

  const dispatch = useDispatch();

  const { data: courseCardData } = useSWR(ALL_COURSE_CARD_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 100000,
  });

  const filterQuery = (inputValue) => {
    return courseCardData?.filter((i) => i.name.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterQuery(inputValue));
      }, 1000);
    });

  const [open, setOpen] = React.useState(false);

  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  const { data: cartList } = useSWR(USER_CART_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 5000,
  });

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <IconButton edge="start" className={classes.menuButton} color="primary">
            <MenuIcon />
          </IconButton>
          <Hidden mdDown>
            <Typography
              className={classes.title}
              variant="h3"
              noWrap
              onClick={() => history.push("/home")}
            >
              Code for Cause
            </Typography>
          </Hidden>
          <AsyncSelect
            className={classes.search}
            getOptionLabel={(options) => options.name}
            getOptionValue={(options) => options._id}
            placeholder={<Typography>Search Course, Categories or mentors...</Typography>}
            cacheOptions
            defaultOptions
            loadOptions={promiseOptions}
            onChange={(opt) => history.push(`/search?q=${opt.name}&`)}
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary: "#3740A1",
              },
            })}
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
          {user ? (
            <>
              <IconButton>
                <Badge color="secondary" variant="dot">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton onClick={() => history.push("/checkout")}>
                <Badge color="secondary" variant="standard" badgeContent={cartList?.length}>
                  <ShopIcon />
                </Badge>
              </IconButton>
              <Hidden smDown>
                <Avatar
                  className={classes.avatar}
                  src={user.photoURL}
                  ref={anchorRef}
                  aria-haspopup="true"
                  onClick={handleToggle}
                />
              </Hidden>
            </>
          ) : (
            <Box className={classes.buttonContainer}>
              <Button className={classes.signUpButton} onClick={() => history.push("/signup")}>
                <Typography noWrap>Sign Up</Typography>
              </Button>
            </Box>
          )}

          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleToggle}>
                    <MenuList autoFocusItem={open} id="menu-list-grow">
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
        <AdBanner />
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(2),
      display: "flex",
    },
  },
  title: {
    color: theme.palette.text.primary,
    width: "15%",
    cursor: "pointer",
  },
  search: {
    marginRight: theme.spacing(2),
    flex: 1,
    color: theme.palette.text.primary,
    fontFamily: "Montserrat, sans-serif",
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
  buttonContainer: {
    display: "flex",
  },
  textStyle: {
    textDecoration: "none",
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
}));

export default NavBar;
