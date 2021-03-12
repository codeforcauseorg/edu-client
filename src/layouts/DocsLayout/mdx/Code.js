import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function Code({ className, ...rest }) {
  const classes = useStyles();

  return <code className={clsx(classes.root, className)} {...rest} />;
}

Code.propTypes = {
  className: PropTypes.string.isRequired,
};
