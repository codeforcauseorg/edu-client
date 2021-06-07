import { Container, List, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { wishlistDeleted } from "../../actions/wishlistActions";
import HeroSection from "../../components/HeroSection";
import EmptyWishlist from "../../components/WishlistComponents/EmptyWishlist";
import WishlistCard from "../../components/WishlistComponents/WishlistComponent";
import WishlistFilterBar from "../../components/WishlistComponents/WishlistFilterBar";
import WishListTagSection from "../../components/WishlistComponents/WishListTagSection";

const mapStateToProps = (state) => ({
  wishlist: state.wishlist,
});

const mapDispatchToProps = (dispatch) => ({
  wishlistDeleted: (id) => dispatch(wishlistDeleted(id)),
});

const WishListView = ({ props, wishlist, wishlistDeleted }) => {
  const classes = useStyles();

  const heroElements = {
    title: "Wishlist",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the.",
    borderColor: "4px solid #6593F5",
    gradientColor: "linear-gradient(180deg, #6593F5 0%, #3740A1 100%)",
    otherDetails: "4 Wishlist Courses",
  };

  return (
    <Container className={classes.wrapperContainer}>
      <HeroSection
        title={heroElements.title}
        description={heroElements.description}
        borderColor={heroElements.borderColor}
        gradientColor={heroElements.gradientColor}
        otherDetails={heroElements.otherDetails}
      />
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
