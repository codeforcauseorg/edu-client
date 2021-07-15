import React from "react";
import {
  MenuItem,
  Popper,
  Paper,
  ClickAwayListener,
  MenuList,
  makeStyles,
} from "@material-ui/core";

const menuList = {
  classroom: [
    {
      label: "View Assignments",
      onClick: () => console.log("View Assignments"),
    },
    {
      label: "View Enrolled Courses",
      onClick: () => console.log("View Enrolled courses"),
    },
  ],
  interview: [
    {
      label: "Share Interview Link",
      onClick: () => console.log("Share Interview Link"),
    },
    {
      label: "Schedule Interview",
      onClick: () => console.log("Schedule Interview"),
    },
  ],
  support: [
    {
      label: "Request for Support",
      onClick: () => console.log("Request for Support"),
    },
  ],
};

function MenuComponent({ handleClose, anchorRef, open, index }) {
  const classes = useStyles();

  const handleOnClick = (handleOnChange) => {
    handleOnChange();
    handleClose();
  };

  const menuListItem = () => {
    switch (index) {
      case 0:
        return menuList.classroom.map((items, index) => (
          <MenuItem key={index} onClick={() => handleOnClick(items.onClick)}>
            {items.label}
          </MenuItem>
        ));

      case 1:
        return menuList.interview.map((items, index) => (
          <MenuItem key={index} onClick={() => handleOnClick(items.onClick)}>
            {items.label}
          </MenuItem>
        ));

      case 2:
        return menuList.support.map((items, index) => (
          <MenuItem key={index} onClick={() => handleOnClick(items.onClick)}>
            {items.label}
          </MenuItem>
        ));
    }
  };

  return (
    <Popper open={open} anchorEl={anchorRef.current}>
      <Paper className={classes.paper}>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList autoFocusItem={open} id="menu-list-grow">
            {menuListItem()}
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </Popper>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: "0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)",
  },
}));

export default MenuComponent;
