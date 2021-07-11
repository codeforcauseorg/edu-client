import { Box, makeStyles, Typography, Container, Paper } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router";
import NavBar from "../../components/NavBar";
import CourseList from "../../components/SearchComponents/CourseList";

function SearchSection() {
  const classes = useStyles();
  const location = useLocation();

  function useQuery() {
    return new URLSearchParams(location.search);
  }

  const query = useQuery().get("q");

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
    paddingBottom: theme.spacing(4),
    color: "#fff",
  },
}));

export default SearchSection;
