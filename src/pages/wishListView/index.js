import { List } from "@material-ui/core";
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
  // const classes = useStyles();
  return (
    <>
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
    </>
  );
};

// const useStyles = makeStyles((theme) => ({
//   li: {
//     padding: "14px 0px",
//   },
//   backButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   appBar: {
//     background: "#160050",
//   },
// }));

export default connect(mapStateToProps, mapDispatchToProps)(WishListView);
