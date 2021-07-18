import { Box } from "@material-ui/core";
import React, { useState } from "react";
import leaderboardElement from "../../data/leaderboardRowElements.json";
import LeaderBoardList from "./LeaderBoardList";
import Pagination from "./Pagination";

function LeaderboardSection() {
  const [currentPage, setcurrentPage] = useState(1);
  const [listsPerPage] = useState(3);

  // Get current list
  const indexOfLastList = currentPage * listsPerPage;
  const indexOfFirstList = indexOfLastList - listsPerPage;
  const currentList = leaderboardElement.slice(indexOfFirstList, indexOfLastList);

  // Change Page
  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  return (
    <Box>
      <LeaderBoardList leaderboardElement={currentList} />
      <Pagination
        listsPerPage={listsPerPage}
        totalList={leaderboardElement.length}
        paginate={paginate}
      />
    </Box>
  );
}

export default LeaderboardSection;
