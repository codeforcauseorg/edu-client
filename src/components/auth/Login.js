import { useSelector, useDispatch } from "react-redux";

import { Typography, Button, CircularProgress, makeStyles } from "@material-ui/core";

import { login } from "../../actions/accountActions";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3, 0, 2),
    boxShadow: "2px 2px 3px white",
    borderRadius: "5px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleimg: {
    backgroundColor: "#fff",
    width: "25%",
    height: "auto",
    borderRadius: "5px",
    marginRight: "25px",
    marginLeft: "-10px",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
}));

function Login() {
  const user = useSelector((state) => state.account.user);
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleLoginOpen = () => {
    try {
      dispatch(login());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={handleLoginOpen}
      style={{
        textTransform: "capitalize",
      }}
    >
      {user ? (
        <CircularProgress size="24px" color="inherit" />
      ) : (
        <Typography component="h4" variant="subtitle1">
          <div className={classes.flex}>
            <img
              alt="google icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              className={classes.googleimg}
            />
            <p> Google</p>
          </div>
        </Typography>
      )}
    </Button>
  );
}

export default Login;
