import { Box } from "@material-ui/core";
import React, { useState } from "react";
import leaderboardElement from "../../data/leaderboardRowElements.json";
import LeaderBoardList from "./LeaderBoardList";
import Pagination from "./Pagination";

function LeaderboardSection() {
  const [pageNumber, setPageNumber] = useState(0);

  const listPerPage = 3;

  const pageVisited = pageNumber * listPerPage;

  const displayList = leaderboardElement.slice(pageVisited, pageVisited + listPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Box>
      <LeaderBoardList leaderboardElement={displayList} />
      <Pagination
        listsPerPage={listPerPage}
        totalList={leaderboardElement.length}
        changePage={changePage}
      />
    </Box>
  );
}

export default LeaderboardSection;
