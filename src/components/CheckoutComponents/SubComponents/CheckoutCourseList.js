import { CardMedia, Card, makeStyles, CardContent, Typography, Box, Chip } from "@material-ui/core";
import React from "react";

function CheckoutCourseList({ courseInfo, removeItem, moveToWishlist }) {
  const classes = useStyles();

  const { name, courseThumbnail, mentor, crossPrice } = courseInfo;

  const mentorName = mentor?.map(
    (items, index) => `${items.name} ${index < mentor.length - 1 ? ", " : ""} `
  );

  const actionItems = [
    {
      title: "Remove",
      onClick: () => removeItem(),
    },
    {
      title: "Move to wishlist",
      onClick: () => moveToWishlist(),
    },
  ];

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} component="img" image={courseThumbnail} title={name} />
      <Box>
        <CardContent>
          <Typography component="h1" variant="h4" gutterBottom>
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            By {mentorName}
          </Typography>
          <Chip size="small" label={" ₹ " + crossPrice} className={classes.price} />
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
    height: 150,
    margin: theme.spacing(2),
    borderRadius: "5px",
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
  price: {
    background: theme.palette.primary.main,
    color: "#fff",
    marginTop: theme.spacing(1),
  },
}));

export default CheckoutCourseList;
