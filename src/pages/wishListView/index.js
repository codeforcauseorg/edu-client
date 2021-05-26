import { List, makeStyles, AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import ScrollToTop from "../../utils/ScrollToTop";
import WishlistCardComponent from "./wishListComponent/wishlistComponent";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { connect } from "react-redux";
import { wishlistDeleted } from "../../actions/wishlistActions";
import EmptyWishlist from "./wishListComponent/emptyWishlist";

const useStyles = makeStyles((theme) => ({
  root: {},
  li: {
    padding: "14px 0px",
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

      {wishlist.length ? (
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
      ) : (
        <EmptyWishlist />
      )}
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
