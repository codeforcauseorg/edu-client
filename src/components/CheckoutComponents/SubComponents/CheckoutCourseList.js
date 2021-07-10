import { CardMedia, Card, makeStyles, CardContent, Typography, Box } from "@material-ui/core";
import React from "react";

const actionItems = [
  {
    title: "Remove",
    onClick: () => console.log("removed"),
  },
  {
    title: "Move to wishlist",
    onClick: () => console.log("Move to wishlist"),
  },
];
function CheckoutCourseList() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        component="img"
        image="https://codeforcause.org/static/swipes/python.png"
        title="Live from space album cover"
      />
      <Box>
        <CardContent>
          <Typography component="h1" variant="h4" gutterBottom>
            Data Structures and Algorithms with Python
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            By Anuj Garg
          </Typography>
          <Box className={classes.actions}>
            {actionItems.map((items, index) => (
              <Typography key={index} className={classes.actionTitle} onClick={items.onClick}>
                {items.title}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    boxShadow: "0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)",
    borderRadius: "2px",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  cover: {
    width: 160,
    height: 120,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 120,
    },
  },
  actionTitle: {
    marginRight: theme.spacing(1),
    "&:hover": {
      color: theme.palette.primary.main,
      fontWeight: 600,
      cursor: "pointer",
    },
  },
  actions: {
    display: "flex",
    marginTop: theme.spacing(4),
  },
}));
export default CheckoutCourseList;
