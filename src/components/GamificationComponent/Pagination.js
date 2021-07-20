import { makeStyles, Box } from "@material-ui/core";
import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ listsPerPage, totalList, changePage }) {
  const classes = useStyles();
  const pageCount = Math.ceil(totalList / listsPerPage);

  return (
    <Box className={classes.root}>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={classes.paginationButtons}
        activeClassName={classes.paginationActive}
      />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
  },
  button: {
    background: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  pageNumber: {
    textTransform: "none",
    border: `2px solid ${theme.palette.primary.main}`,
    margin: theme.spacing(0, 2),
  },
  paginationButtons: {
    width: "80%",
    height: 40,
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    "& a": {
      padding: 10,
      margin: 8,
      borderRadius: "5px",
      border: `2px solid ${theme.palette.primary.main}`,
      fontFamily: "Montserrat, sans-serif",
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
    "& a:hover": {
      background: theme.palette.primary.main,
      color: "#fff",
    },
  },
  paginationActive: {
    "& a": {
      background: theme.palette.primary.main,
      color: "#fff",
    },
  },
}));

export default Pagination;
