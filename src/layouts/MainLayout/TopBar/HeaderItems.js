import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Box, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {},
  textStyle: {
    color: "black",
    position: "relative",
    fontColor: "blue",
    display: "flex",
    padding: " 19px 19px",
    textDecoration: "none",
    "&:hover": {
      position: "relative",
      top: "2px",
      borderBottom: "4px solid #A60000",
    },
  },
  activeCls: {
    position: "relative",
    top: "2px",
    borderBottom: "4px solid #A60000",
  },
}));

const HeaderItem = ({ title, link, active }) => {
  const classes = useStyles();
  return (
    <Box ml={2}>
      <Link
        smooth
        to={link}
        variant="h5"
        className={clsx({
          [classes.textStyle]: true,
          [classes.activeCls]: active,
        })}
      >
        <Typography variant="h6" color="textPrimary" style={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

export default HeaderItem;
