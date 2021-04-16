import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ContestCard from "./ContestCard";
const useStyle = makeStyles((theme) => ({
  headerContainer: {
    minHeight: 300,
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
    paddingLeft: theme.spacing(3),
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "scroll",
    scrollbarWidth: "none" /* mozilla */,
    "&::-webkit-scrollbar": {
      display: "none" /* Safari and Chrome browsers */,
    },
  },
}));

const contestData = [
  {
    id: 1,
    contestLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkl-uo_VyIJuVih38dOHqCdKhtwzlmDrmeNw&usqp=CAU       ",
    contestName: "Full Stack Developer Challenge",
    countdownDuration: "may 17, 2021 00:00:00",
  },
  {
    id: 2,
    contestLogo:
      "https://he-s3.s3.amazonaws.com/media/cache/c1/ac/c1ac27f899fcd944bdb55b6fc3dbc2e0.png",
    contestName: "HackOn 2.0",
    countdownDuration: "April 30, 2021 00:00:00",
  },
  {
    id: 3,
    contestLogo: "   https://techyeverything.com/wp-content/uploads/2020/11/Main-9.jpg",
    contestName: "Brute Force 4.0 - Cybersecurity",
    countdownDuration: "may 01, 2021 00:00:00",
  },
];

function HeaderComponent() {
  const classes = useStyle();
  return (
    <Box className={classes.headerContainer}>
      <Box className={classes.titleContainer}>
        <Typography variant="h3">
          Live Contests{"  "}
          <Typography component="span" variant="h3" className={classes.spanText}>
            ({contestData.length})
          </Typography>
        </Typography>
        <Button className={classes.viewTextButton}>
          <Typography variant="h6">View all</Typography>
        </Button>
      </Box>
      <Box className={classes.cardWrapper}>
        {contestData.map((items, index) => (
          <ContestCard
            key={index}
            contestLogo={items.contestLogo}
            contestName={items.contestName}
            countdownDuration={items.countdownDuration}
          />
        ))}
      </Box>
    </Box>
  );
}

export default HeaderComponent;
