import { Button, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#A60000",
    color: "#ffffff",
    textTransform: "capitalize",
    boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.25)",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "&:hover": {
      backgroundColor: "rgba(166, 0, 0, 0.8)",
    },
  },
}));

const ButtonComponent = (props) => {
  const { className, title, icon = null, ...rest } = this;
  const classes = useStyles();
  return (
    <Button className={clsx(classes.btn, className)} {...rest}>
<<<<<<< HEAD
      {icon && icon}
=======
      {icon || ""}
>>>>>>> aeef059ecd3a87e50c2ecbfe4b7730488c5827c9
      <Typography variant="h3">{title}</Typography>
    </Button>
  );
};

ButtonComponent.propTypes = {
  title: PropTypes.string,
};

export default ButtonComponent;
