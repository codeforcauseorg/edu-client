import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import HeroSection from "../../../components/HeroSection";
import EmptyWishlist from "../../../components/WishlistComponents/EmptyWishlist";
import WishlistFilterBar from "../../../components/WishlistComponents/WishlistFilterBar";
import WishListTagSection from "../../../components/WishlistComponents/WishListTagSection";
import MediaCard from "../../../components/CourseMediaCard/MediaCard";
import useSWR, { mutate } from "swr";
import { deleteWishlist } from "../../../services/userService";
import { loadData } from "../../../services/apiService";
import { useEffect, useState } from "react";
import SnackBarComponent from "../../../components/SnackBar/SnackBar";
import { ALL_COURSE_CARD_ENDPOINT, USER_WISHLIST_ENDPOINT } from "../../../constants/apiEndpoints";

const WishListView = () => {
  const classes = useStyles();

  const { data: courseData } = useSWR(ALL_COURSE_CARD_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const { data: wishlistCoureId } = useSWR(USER_WISHLIST_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 5000,
  });

  const [wistlist, setwistlist] = useState([]);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const userWishlist = courseData?.filter((course) => wishlistCoureId?.includes(course._id));
    setwistlist(userWishlist);
  }, [wishlistCoureId]);

  const heroElements = {
    title: "Wishlist",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the.",
    otherDetails: "4 Wishlist Courses",
  };

  // delete element from userWishlist array

  const deleteWishlistCourse = (id) => {
    handleClick();
    mutate(
      USER_WISHLIST_ENDPOINT,
      wishlistCoureId.filter((courseId) => courseId !== id),
      false
    );
    const filterWishlistList = wistlist.filter((course) => course._id !== id);
    setwistlist(filterWishlistList);
    dispatch(deleteWishlist(id));
  };

  return (
    <Container className={classes.wrapperContainer} disableGutters>
      <HeroSection
        title={heroElements.title}
        description={heroElements.description}
        banner="assets/img/wishlistBanner.svg"
      />

      <>
        <WishlistFilterBar />
        <WishListTagSection />
        <Box mt={10} mb={5}>
          {wistlist?.length ? (
            <Grid container spacing={2}>
              {wistlist?.map((items) => {
                return (
                  <Grid key={items._id} item xs={12} sm={6} md={6} lg={3}>
                    <MediaCard
                      props={items}
                      onClick={() => deleteWishlistCourse(items._id)}
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
      <SnackBarComponent
        vertical="bottom"
        horizontal="center"
        opensnack={open}
        handleClose={handleClose}
        severity="info"
        message="Deleted from Wishlist"
        autoHideDuration={2000}
      />
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
