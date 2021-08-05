import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "../../../components/HeroSection";
import EmptyWishlist from "../../../components/WishlistComponents/EmptyWishlist";
import WishlistFilterBar from "../../../components/WishlistComponents/WishlistFilterBar";
import WishListTagSection from "../../../components/WishlistComponents/WishListTagSection";
import MediaCard from "../../../components/CourseMediaCard/MediaCard";
import UserLogoutState from "../../../components/UserLogoutState";
import useSWR from "swr";
import { deleteWishlist } from "../../../services/userService";
import { loadData } from "../../../services/apiService";

const WishListView = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.account.user);

  const { data: courseData } = useSWR("/course/cards/all", loadData);
  const { data: userData } = useSWR("/user/get", loadData);

  const dispatch = useDispatch();

  const userWishlist = courseData?.filter((course) => userData?.wishlist.includes(course._id));

  const heroElements = {
    title: "Wishlist",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the.",
    otherDetails: "4 Wishlist Courses",
  };

  return (
    <Container className={classes.wrapperContainer} disableGutters>
      <HeroSection
        title={heroElements.title}
        description={heroElements.description}
        banner="assets/img/wishlistBanner.svg"
      />
      {user ? (
        <>
          <WishlistFilterBar />
          <WishListTagSection />
          <Box mt={10} mb={5}>
            {userWishlist.length ? (
              <Grid container spacing={2}>
                {userWishlist.map((items) => {
                  return (
                    <Grid key={items._id} item xs={12} sm={6} md={6} lg={3}>
                      <MediaCard
                        props={items}
                        onClick={() => dispatch(deleteWishlist(items._id))}
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
        </>
      ) : (
        <Container>
          <UserLogoutState />
        </Container>
      )}
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    minWidth: "90%",
  },
  wishlistContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  innerContainer: {
    marginRight: theme.spacing(2),
  },
}));

export default WishListView;
