import { List, makeStyles, AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import ScrollToTop from "../../utils/ScrollToTop";
import WishlistCardComponent from "./wishListComponent/wishlistComponent";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import ScrollTop from "../../components/backTop/index";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { connect } from "react-redux";
import { wishlistDeleted } from "../../actions/wishlistActions";

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
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: "#160050",
  },
}));

const WishListView = ({ props, wishlist, wishlistDeleted }) => {
  console.log(wishlist);
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" className={classes.title}>
            WishList
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div id="back-to-top-anchor"></div>
      <ScrollToTop />
      <List>
        {wishlist.map((item) => {
          return (
            <WishlistCardComponent
              key={item.id}
              props={item}
              onClick={() => wishlistDeleted({ id: item.id })}
            />
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
const mapStateToProps = (state) => ({
  wishlist: state.wishlist,
});

const mapDispatchToProps = (dispatch) => ({
  wishlistDeleted: (id) => dispatch(wishlistDeleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WishListView);
