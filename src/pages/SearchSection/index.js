import { Box, makeStyles, Typography, Container } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router";
import NavBar from "../../components/NavBar";

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
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "85%",
  },
}));

export default SearchSection;
