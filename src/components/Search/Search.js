import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    margin: "0 1rem 1rem 1rem",
    display: "flex",
    flexDirection: "column",
  },
  inputBox: {
    marginTop: "1rem",
    padding: ".25rem .55rem",
    display: "flex",
    border: "2px solid #ddd",
    borderRadius: "1rem",
  },
  icon: {
    color: "#AD0517",
  },
  input: {
    paddingLeft: ".5rem",
    width: "100%",
    border: "none",
    outline: "none",
  },
  tags: {
    marginBottom: "1rem",
    paddingTop: "1rem",
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    cursor: "pointer",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  tag: {
    marginRight: ".5rem",
    padding: ".5rem .75rem",
    background: "#e7e7e7",
    borderRadius: ".75rem",
    fontSize: ".7rem",
    color: "#AD0517",
  },
}));

function Search({ data, placeholder }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.inputBox}>
        <SearchIcon className={classes.icon} />
        <input className={classes.input} type="text" placeholder={placeholder}></input>
      </div>
      <div className={classes.tags}>
        {data.map((item, i) => (
          <Typography variant="body1" className={classes.tag} key={i}>
            {item}
          </Typography>
        ))}
      </div>
    </div>
  );
}

export default Search;
