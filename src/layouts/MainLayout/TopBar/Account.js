import React from "react";
import { useSelector, useDispatch } from "react-redux";

import PersonIcon from "@material-ui/icons/Person";
import {
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Hidden,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import { dismissLogin, login, logout } from "../../../actions/accountActions";
// import { cfaSignIn } from 'capacitor-firebase-auth';
// import authService from '../../../services/authService';
// import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: "120px",
  },
}));

function Account() {
  const user = useSelector((state) => state.account.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  // const { enqueueSnackbar } = useSnackbar();

  const handleLogout = () => {
    handleCloseMenu();
    dispatch(logout());
    dispatch(dismissLogin());
  };

  const handleLoginOpen = () => {
    dispatch(login());
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const truncate = (input) => {
    const first = input.split(" ")[0];
    if (first.length > 13) {
      return first.substring(0, 10) + "...";
    }
    return first;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 64,
      }}
    >
      <div
        style={{
          padding: "10% 10px",
          whiteSpace: "nowrap",
          color: "#000000",
        }}
      >
        {user ? (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            onClick={handleOpenMenu}
            style={{
              cursor: "pointer",
            }}
          >
            <Avatar
              style={{
                height: "35px",
                width: "auto",
                marginRight: "16px",
              }}
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="avatar"
                  style={{
                    height: "35px",
                  }}
                />
              ) : (
                <PersonIcon
                  style={{
                    height: "35px",
                    width: "35px",
                    padding: "5px",
                  }}
                />
              )}
            </Avatar>
            <Hidden smDown>
              <Typography variant="h6">
                <Box
                  style={{
                    color: "#A60000",
                  }}
                >
                  {`Hello ${truncate(user.displayName)}`}
                </Box>
              </Typography>
            </Hidden>
          </Box>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleLoginOpen}
            style={{
              textTransform: "capitalize",
            }}
          >
            {user === undefined ? (
              <CircularProgress size="24px" color="inherit" />
            ) : (
              <Typography variant="h6">Login</Typography>
            )}
          </Button>
        )}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          keepMounted
          open={!!anchorEl}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
          {/* This shortcut to Profile will be activated once things are fully complete with Profile */}
          {/* <MenuItem onClick={handleCloseMenu}>
            <Link
              to="/student"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              My Profile
            </Link>
          </MenuItem> */}
        </Menu>
      </div>
    </div>
  );
}

export default Account;
