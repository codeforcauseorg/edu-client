import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    margin: "0 1rem 1rem 1rem",
    display: "flex",
    flexDirection: "column",
  },
  inputBox: {
    marginBottom: "1rem",
    padding: ".25rem .55rem",
    display: "flex",
    border: "2px solid #ddd",
    borderRadius: "1rem",
  },
  icon: {
    color: "#f00",
  },
  input: {
    paddingLeft: ".5rem",
    width: "100%",
    border: "none",
    outline: "none",
  },
  tags: {
    paddingTop: "1rem",
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    scrollbarWidth: "none",
  },
  tag: {
    marginRight: ".5rem",
    padding: ".5rem .75rem",
    background: "#ddd",
    borderRadius: ".75rem",
    fontSize: ".7rem",
    color: "red",
  },
}));

function Search() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.inputBox}>
        <SearchIcon className={classes.icon} />
        <input
          className={classes.input}
          type="text"
          placeholder="Search courses, categories or mentors"
        ></input>
      </div>
      <div className={classes.tags}>
        {["Web", "Programming", "Android", "Kotlin", "C/C++", "Python"].map((item, i) => (
          <p className={classes.tag} key={i}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Search;
