import React from "react";
import PropTypes from "prop-types";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  h1: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },
  h2: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },
  h3: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },
}));

export default function Heading({ children, variant, ...rest }) {
  const classes = useStyles();

  return (
    <Typography className={classes[variant]} variant={variant} color="textPrimary" {...rest}>
      {children}
    </Typography>
  );
}

Heading.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
};
