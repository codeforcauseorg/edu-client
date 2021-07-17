import {
  Avatar,
  Box,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";

function LeaderboardSection() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">
              <Box className={classes.score}>Score</Box>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[1, 2, 3, 4, 5].map((index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                <Box className={classes.infoContainer}>
                  <Avatar className={classes.avatar} />
                  Adarsh Kumar Singh
                </Box>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Box className={classes.score}>200</Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#fff",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:hover": {
      boxShadow:
        "0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)",
      backgroundColor: "#F5F7FA",
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    boxShadow: "0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)",
    marginBottom: theme.spacing(4),
  },
  infoContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  score: {
    marginRight: theme.spacing(2),
  },
}));

export default LeaderboardSection;
