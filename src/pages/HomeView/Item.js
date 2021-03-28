import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  img: {
    borderRadius: "6px",
    width: "100%",
    height: "150px",
  },
  root: {
    marginTop: "18px",
  },
}));

export default function Item(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {/* <h2>{props.item.img}</h2> */}
      <img className={classes.img} src={props.item.img} alt="" />
    </Paper>
  );
}
