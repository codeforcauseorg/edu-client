import { Box, Button } from "@material-ui/core";
import React from "react";

function Pagination({ listsPerPage, totalList, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalList / listsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Box>
      {pageNumbers.map((number, index) => (
        <Button onClick={() => paginate(number)} key={index}>
          {number}
        </Button>
      ))}
    </Box>
  );
}

export default Pagination;
