import { makeStyles } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";

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

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default ScrollTop;
