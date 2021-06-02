import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardContainer: {
    overflow: "auto",
    minheight: "80px",
    padding: "20px 10px",
    paddingBottom: "50px",
    display: "flex",
    flexWrap: "no-wrap",
    marginTop: "10px",
    marginBottom: "10px",
    scrollbarWidth: "none" /* mozilla */,
    "&::-webkit-scrollbar": {
      display: "none" /* Safari and Chrome browsers */,
    },
  },
});

const CardContainer = (props) => {
  const classes = useStyles();

  return <div className={classes.cardContainer}>{props.children}</div>;
};

export default CardContainer;
