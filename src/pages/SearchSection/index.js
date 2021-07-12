import {
  Box,
  makeStyles,
  Typography,
  Container,
  Paper,
  FormControl,
  NativeSelect,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import NavBar from "../../components/NavBar";
import CourseList from "../../components/SearchComponents/CourseList";
import FilterListIcon from "@material-ui/icons/FilterList";

function SearchSection(props) {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  function useQuery() {
    return new URLSearchParams(location.search);
  }

  const query = useQuery().get("q");
  const sort = useQuery().get("sort");
  console.log(sort);
  const [state, setState] = useState("all");

  const handleChange = (event) => {
    setState(event.target.value);
    history.push(`/search?q=${query}&sort=${state}`);
    console.log(event.target.value);
  };

  const filterList = ["Most Relevant", "Most Reviewed", "Highest Rated", "Newest"];

  return (
    <>
      <NavBar />
      <Box mt={8} className={classes.root}>
        <Container className={classes.container}>
          <Box pt={8}>
            <Typography variant="h2">2,536 results for &quot;{query}&quot;</Typography>
          </Box>
        </Container>
        <Paper className={classes.filterSection}>
          <Container className={classes.container}>
            <Typography variant="h5" className={classes.title}>
              Filter by
            </Typography>
            <FormControl className={classes.formControl}>
              <FilterListIcon className={classes.filterIcon} />
              <NativeSelect className={classes.dropdown} value={state} onChange={handleChange}>
                {filterList.map((items, index) => (
                  <option key={index} value={items}>
                    {items}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </Container>
        </Paper>
        <Container className={classes.courseListContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((items, index) => (
            <CourseList key={index} />
          ))}
        </Container>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    maxWidth: "85%",
  },
  courseListContainer: {
    maxWidth: "85%",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "95%",
      marginTop: theme.spacing(6),
    },
  },
  filterSection: {
    background: theme.palette.primary.main,
    height: "100%",
    borderRadius: "0px",
    marginTop: theme.spacing(4),
    boxShadow: "0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)",
  },
  title: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
    color: "#fff",
  },
  dropdown: {
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
  filterIcon: {
    color: "#333",
    marginLeft: theme.spacing(2),
  },
  formControl: {
    width: "100%",
    boxShadow: "0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1)",
    top: 65,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    background: "#fff",
    margin: 8,
    borderRadius: "5px",
    height: 50,
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
  },
}));

export default SearchSection;
