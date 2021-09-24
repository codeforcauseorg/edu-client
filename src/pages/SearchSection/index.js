import {
  Box,
  makeStyles,
  Typography,
  Container,
  Paper,
  FormControl,
  NativeSelect,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import CourseList from "../../components/SearchComponents/CourseList";
import FilterListIcon from "@material-ui/icons/FilterList";
import { ALL_COURSE_CARD_ENDPOINT } from "../../constants/apiEndpoints";
import { loadData } from "../../services/apiService";
import useSWR from "swr";

function SearchSection(props) {
  const classes = useStyles();

  const location = useLocation();

  const history = useHistory();

  function useQuery() {
    return new URLSearchParams(location.search);
  }

  const query = useQuery().get("q");

  const sort = useQuery().get("sort");

  const { data: courseCardData } = useSWR(ALL_COURSE_CARD_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 100000,
  });

  const filterCourse = courseCardData?.filter((course) => course?.name === query);

  console.log(sort);

  const [state, setState] = useState("all");
  const [tagState, setTagState] = useState("Select Tag");

  const handleChange = (event) => {
    setState(event.target.value);
    history.push(`/search?q=${query}&sort=${state}`);
    console.log(event.target.value);
  };

  const filterList = ["Most Relevant", "Most Reviewed", "Highest Rated", "Newest"];
  const tagListSet = new Set()
  let tagList = ["Search by Tags"];
  courseCardData?.map((course, index) => {
    tagList = [...tagList, ...course?.tags.filter((items) => {
      if (!tagListSet.has(items)) {
        tagListSet.add(items);
        return true;
      }
      return false;
    })]
    return true;
  });
  useEffect(() => {
    if (tagState !== "Select Tag")
      history.push(`/tags?q=${tagState}`);
  }, [tagState])

  return (
    <>
      <Box className={classes.root}>
        <Container className={classes.container}>
          <Box pt={8}>
            <Typography variant="h2">
              {filterCourse?.length} results for &quot;{query}&quot;
            </Typography>
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
              <NativeSelect className={classes.dropdown} value={tagState} onChange={(event) => setTagState(event.target.value)}>
                {tagList.map((items, index) =>
                  <option key={index} value={items}>
                    {items}
                  </option>
                )}
              </NativeSelect>
            </FormControl>
          </Container>
        </Paper>
        <Container className={classes.courseListContainer}>
          {filterCourse?.map((items, index) => (
            <CourseList key={index} props={items} />
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
