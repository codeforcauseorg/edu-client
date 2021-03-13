import { List, ListItem, makeStyles } from "@material-ui/core";
import React from "react";
import WishlistCard from "../../components/wishlistCard";

const useStyles = makeStyles((theme) => ({
  root: {},
  li: {
    padding: "14px 0px",
  },
}));

const WishListView = () => {
  const classes = useStyles();

  return (
    <List>
      {[1, 2, 3].map((item, index) => {
        return (
          <ListItem key={index} className={classes.li}>
            <WishlistCard />
          </ListItem>
        );
      })}
    </List>
  );
};

export default WishListView;
