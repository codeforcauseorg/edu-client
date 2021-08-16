import { Box, Chip, CircularProgress, Container, Divider, makeStyles } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import CommentSection from "../../components/DoubtDetailSectionComponent/CommentSection";
import PostCommentSection from "../../components/DoubtDetailSectionComponent/PostCommentSection";
import { GET_DOUBT_DETAILS_ENDPOINT } from "../../constants/apiEndpoints";
import { loadData } from "../../services/apiService";
import DoubtHeaderSection from "../../components/DoubtDetailSectionComponent/DoubtHeaderSection";

function DoubtDetailSection() {
  const classes = useStyles();

  const { id } = useParams();

  const { data: doubtDetails } = useSWR(GET_DOUBT_DETAILS_ENDPOINT + "/" + id, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 100000,
  });

  return (
    <Container className={classes.root} disableGutters>
      {doubtDetails === undefined ? (
        <Box className={classes.loadingContainer}>
          <CircularProgress size={50} />
        </Box>
      ) : (
        <>
          <DoubtHeaderSection doubtInfo={doubtDetails} />
          <PostCommentSection doubtInfo={doubtDetails} />
          <Chip
            className={classes.totalAnswer}
            label={doubtDetails.answers.length + ` Answered `}
          />
          <Divider className={classes.divider} />
          <CommentSection answers={doubtDetails.answers} />
        </>
      )}
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
  },
  questionTitle: {
    fontWeight: 500,
  },
  questionDescription: {
    margin: theme.spacing(4, 0),
  },

  totalAnswer: {
    margin: theme.spacing(4, 0),
    background: theme.palette.text.primary,
    color: "#fff",
  },
  divider: {
    margin: theme.spacing(4, 0),
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(8),
  },
}));

export default DoubtDetailSection;
