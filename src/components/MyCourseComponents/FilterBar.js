import React from "react";
import { AppBar, FormControl, makeStyles, NativeSelect } from "@material-ui/core";

const filterList = [
  "Web Development",
  "Android Dev",
  "AI",
  "ML",
  "Devops",
  "NextJS",
  "React",
  "Programming",
  "Android",
  "Kotlin",
  "C/C++",
  "Python",
];

function FilterBar() {
  const classes = useStyles();
  const [state, setState] = React.useState("hai");

  const handleChange = (event) => {
    setState(event.target.value);
    console.log(event.target.value);
  };

  return (
    <AppBar position="static" className={classes.container}>
      <FormControl className={classes.formControl}>
        <NativeSelect className={classes.dropdown} value={state.age} onChange={handleChange}>
          <option value="" disabled>
            Filter
          </option>
          {filterList.map((items, index) => (
            <option key={index} value={items}>
              {items}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "50px",
    backgroundColor: "#F8F8F8",
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    borderRadius: "5px",
  },
  dropdown: {
    background: "#fff",
    margin: theme.spacing(1),
    textTransform: "none",
    padding: theme.spacing(1),
    borderRadius: "5px",
    "&.MuiInput-underline:before": {
      display: "none",
    },
    "&.MuiInput-underline:after": {
      display: "none",
    },
  },
}));
export default FilterBar;
