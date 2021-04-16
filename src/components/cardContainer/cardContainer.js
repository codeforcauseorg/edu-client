import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardContainer: {
    padding: "20px 10px 50px",
    display: "flex",
    flexWrap: "nowrap",
    marginTop: "10px",
    marginBottom: "10px",
    gap: "32px",
    overflowX: "scroll",
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
