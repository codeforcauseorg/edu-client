import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    margin: 0,
    marginTop: "16px",
    borderRadius: "8px",
    padding: 0,
    "&:hover": {
      cursor: "pointer",
      transform: "translateY(-2px)",
    },
  },
  cardHeader: {
    backgroundColor: "#A60000",
    color: "#fff",
  },
  icon: {
    color: "#fff",
    padding: "4px",
  },
  title: {
    fontWeight: 700,
    fontSize: "12px",
  },
  bottomfont: {
    paddingLeft: "8px",
    fontStyle: "italic",
    fontSize: "12px",
  },
}));

export default useStyles;
