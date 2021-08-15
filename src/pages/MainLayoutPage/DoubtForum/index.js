import { Container, makeStyles, Box, Hidden } from "@material-ui/core";
import useSWR from "swr";
import FilterSection from "../../../components/DoubtForumComponent/FilterSection";
import QuestionSection from "../../../components/DoubtForumComponent/QuestionSection";
import HeroSection from "../../../components/HeroSection/index";
import DoubtQuestionListSkeleton from "../../../components/skeleton/DoubtQuestionListSkeleton";
import { GET_DOUBT_ENDPOINT } from "../../../constants/apiEndpoints";
import { loadData } from "../../../services/apiService";

function DoubtForum(props) {
  const classes = useStyles();

  const { data } = useSWR(GET_DOUBT_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const heroElements = {
    title: "Doubt forum",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the.",
  };

  return (
    <Container className={classes.wrapperContainer} disableGutters>
      <HeroSection
        title={heroElements.title}
        description={heroElements.description}
        banner="assets/img/doubtBanner.svg"
      />
      <Box className={classes.container}>
        {data === undefined ? (
          <Box className={classes.skeletonContainer}>
            {[1, 2, 3].map((index) => (
              <DoubtQuestionListSkeleton key={index} />
            ))}
          </Box>
        ) : (
          <QuestionSection doubtQuestion={data} />
        )}
        <Hidden lgDown>
          <FilterSection />
        </Hidden>
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    minWidth: "90%",
  },
  container: {
    display: "flex",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  skeletonContainer: {
    flex: 8,
    borderRadius: "5px",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(0),
    },
  },
}));

export default DoubtForum;
