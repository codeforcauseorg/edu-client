import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  Container,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import CommentSection from "../../components/DoubtDetailSectionComponent/CommentSection";
import PostCommentSection from "../../components/DoubtDetailSectionComponent/PostCommentSection";
import { GET_DOUBT_DETAILS_ENDPOINT } from "../../constants/apiEndpoints";
import { loadData } from "../../services/apiService";

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
          <Box className={classes.headderContainer}>
            <Typography variant="h3" className={classes.questionTitle} gutterBottom>
              {doubtDetails.question}
            </Typography>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={doubtDetails.photoUrl} />
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="body2">Adarsh Kumar Singh</Typography>
                <Typography>{moment(doubtDetails.createdAt).fromNow()}</Typography>
              </ListItemText>
            </ListItem>
          </Box>
          <Typography variant="h6" component="p" className={classes.questionDescription}>
            {doubtDetails.doubtBody}
          </Typography>
          <PostCommentSection />
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
