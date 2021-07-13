import { Container, makeStyles } from "@material-ui/core";

function GamificationBoard(props) {
  const classes = useStyles();

  return <Container className={classes.wrapperContainer}></Container>;
}

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    minWidth: "90%",
  },
}));

export default GamificationBoard;
