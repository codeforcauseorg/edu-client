import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ContestCard from "./ContestCard";
import ContestCategories from "./ContestCategories";
const useStyle = makeStyles((theme) => ({
  headerContainer: {
    minHeight: 400,
    background: "linear-gradient(180deg, #271576 0%, #4C3896 100%)",
  },
  titleContainer: {
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1.5),
  },
  viewTextButton: {
    color: "#fff",
    textTransform: "none",
  },
  spanText: {
    color: "#9DA3A8",
  },
  cardWrapper: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "scroll",
    scrollbarWidth: "none" /* mozilla */,
    "&::-webkit-scrollbar": {
      display: "none" /* Safari and Chrome browsers */,
    },
  },
  categoriesButton: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "scroll",
    scrollbarWidth: "none" /* mozilla */,
    "&::-webkit-scrollbar": {
      display: "none" /* Safari and Chrome browsers */,
    },
  },
}));
function HeaderComponent() {
  const classes = useStyle();
  return (
    <Box className={classes.headerContainer}>
      <Box className={classes.titleContainer}>
        <Typography variant="h3">
          Live Contests{"  "}
          <Typography component="span" variant="h3" className={classes.spanText}>
            (5)
          </Typography>
        </Typography>
        <Button className={classes.viewTextButton}>
          <Typography variant="h6">View all</Typography>
        </Button>
      </Box>
      <Box className={classes.cardWrapper}>
        {[1, 2, 3].map((items, index) => (
          <ContestCard key={index} />
        ))}
      </Box>
      <Box className={classes.categoriesButton}>
        {[1, 2, 3].map((items, index) => (
          <ContestCategories key={index} />
        ))}
      </Box>
    </Box>
  );
}

export default HeaderComponent;
