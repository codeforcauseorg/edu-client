import { List, ListItem, makeStyles } from "@material-ui/core";
import ScrollToTop from "../../utils/ScrollToTop";
import WishlistCard from "../../components/wishlistCard";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import ScrollTop from "../../components/backTop/index";

const useStyles = makeStyles((theme) => ({
  root: {},
  li: {
    padding: "14px 0px",
  },
  backtotop: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

const WishListView = (props) => {
  const classes = useStyles();
  return (
    <>
      <div id="back-to-top-anchor"></div>
      <ScrollToTop />
      <List>
        {[1, 2, 3].map((item, index) => {
          return (
            <ListItem key={index} className={classes.li}>
              <WishlistCard props={props} />
            </ListItem>
          );
        })}
      </List>
      <div className={classes.backtotop}>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
    </>
  );
};

export default WishListView;
