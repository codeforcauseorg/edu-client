import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { wishlistDeleted } from "../../../store/actions/wishlistActions";
import HeroSection from "../../../components/HeroSection";
import EmptyWishlist from "../../../components/WishlistComponents/EmptyWishlist";
import WishlistFilterBar from "../../../components/WishlistComponents/WishlistFilterBar";
import WishListTagSection from "../../../components/WishlistComponents/WishListTagSection";
import MediaCard from "../../../components/CourseMediaCard/MediaCard";

const mapStateToProps = (state) => ({
  wishlist: state.wishlist,
});

const mapDispatchToProps = (dispatch) => ({
  wishlistDeleted: (id) => dispatch(wishlistDeleted(id)),
});

const WishListView = ({ wishlist, wishlistDeleted }) => {
  const classes = useStyles();

  const heroElements = {
    title: "Wishlist",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the.",
    otherDetails: "4 Wishlist Courses",
  };

  return (
    <Container className={classes.wrapperContainer}>
      <HeroSection
        title={heroElements.title}
        description={heroElements.description}
        otherDetails={heroElements.otherDetails}
      />
      <WishlistFilterBar />
      <WishListTagSection />
      <Box mt={10} mb={5}>
        {wishlist.length ? (
          <Grid container spacing={4}>
            {wishlist.map((items) => {
              return (
                <Grid key={items.id} item xs={12} sm={6} md={6} lg={4}>
                  <MediaCard
                    title={items.title}
                    description={items.description}
                    ratings={items.ratings}
                    lessonsNumbers={items.lessonsNumbers}
                    courseImage={items.courseImage}
                    tag={items.tag}
                    price={items.price}
                    mentors={items.mentors}
                    onClick={() => wishlistDeleted({ id: items.id })}
                    isDeleteButton={true}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <EmptyWishlist />
        )}
      </Box>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    minWidth: "90%",
  },
}));

export default connect(mapStateToProps, mapDispatchToProps)(WishListView);
