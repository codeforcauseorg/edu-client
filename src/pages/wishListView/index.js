import { Container, List, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { wishlistDeleted } from "../../actions/wishlistActions";
import EmptyWishlist from "../../components/WishlistComponents/EmptyWishlist";
import WishlistCard from "../../components/WishlistComponents/WishlistComponent";
import WishlistFilterBar from "../../components/WishlistComponents/WishlistFilterBar";
import WishListHero from "../../components/WishlistComponents/WishListHero";
import WishListTagSection from "../../components/WishlistComponents/WishListTagSection";

const mapStateToProps = (state) => ({
  wishlist: state.wishlist,
});

const mapDispatchToProps = (dispatch) => ({
  wishlistDeleted: (id) => dispatch(wishlistDeleted(id)),
});

const WishListView = ({ props, wishlist, wishlistDeleted }) => {
  const classes = useStyles();
  return (
    <Container className={classes.wrapperContainer}>
      <WishListHero />
      <WishlistFilterBar />
      <WishListTagSection />
      {wishlist.length ? (
        <List>
          {wishlist.map((item) => {
            return (
              <WishlistCard
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
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    minWidth: "90%",
  },
}));

export default connect(mapStateToProps, mapDispatchToProps)(WishListView);
