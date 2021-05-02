import { Button, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#A60000",
    color: "#ffffff",
    textTransform: "capitalize",
    boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.25)",
    padding: "10px",
    width: "100%",
    "&:hover": {
      backgroundColor: "rgba(166, 0, 0, 0.8)",
    },
  },
}));

function ButtonComponent({ className, title, icon = null, onClick }) {
  const classes = useStyles();
  return (
    <Button className={clsx(classes.btn, className)} onClick={onClick}>
      {icon || ""}
      <Typography variant="subtitle2">{title}</Typography>
    </Button>
  );
}

ButtonComponent.propTypes = {
  title: PropTypes.string,
};

export default ButtonComponent;
