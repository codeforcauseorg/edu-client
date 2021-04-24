import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
    borderWidth: 2,
    borderRadius: 12,
  },
  title: {
    paddingLeft: 14,
  },
  select: {
    minWidth: 100,
    background: "white",
    color: "black",
    fontWeight: 600,
    borderStyle: "none",
    paddingLeft: 24,
    paddingTop: 14,
    paddingBottom: 15,
    borderRadius: 12,
    "&:focus": {
      borderRadius: 12,
      background: "white",
      borderColor: theme.palette.secondary.main,
    },
  },
  icon: {
    color: theme.palette.secondary.main,
    right: 12,
    position: "absolute",
    userSelect: "none",
    pointerEvents: "none",
  },
  paper: {
    borderRadius: 12,
    marginTop: 8,
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    background: "white",
    "& li": {
      fontWeight: 500,
      paddingTop: 12,
      paddingBottom: 12,
    },
    "& li:hover": {
      background: theme.palette.secondary.main,
      color: "white",
    },
    "& li.Mui-selected": {
      color: "white",
      background: theme.palette.secondary.dark,
    },
    "& li.Mui-selected:hover": {
      background: theme.palette.secondary.dark,
    },
  },
  disable: {
    color: "gray",
    fontStyle: "italic",
    fontWeight: 400,
  },
}));

const DropdownList = ({ title, items, disable }) => {
  const [val, setVal] = useState(0);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const classes = useStyles();

  const iconComponent = (props) => {
    return <ExpandMoreIcon className={props.className + " " + classes.icon} />;
  };

  const menuProps = {
    classes: {
      paper: classes.paper,
      list: classes.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  return (
    <FormControl className={classes.form}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography className={clsx({ [classes.title]: true, [classes.disable]: disable })}>
          {title}
        </Typography>
        <Select
          disableUnderline
          classes={{ root: classes.select, disabled: disable ? classes.disable : "" }}
          MenuProps={menuProps}
          IconComponent={iconComponent}
          value={val}
          onChange={handleChange}
          disabled={disable}
        >
          {items !== null ? (
            items.map((item, index) => (
              <MenuItem value={index} key={index}>
                {item}
              </MenuItem>
            ))
          ) : (
            <MenuItem value={0}>Change</MenuItem>
          )}
        </Select>
      </Box>
    </FormControl>
  );
};

export default DropdownList;
