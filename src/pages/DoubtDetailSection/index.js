import {
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import CommentSection from "../../components/DoubtDetailSectionComponent/CommentSection";
import PostCommentSection from "../../components/DoubtDetailSectionComponent/PostCommentSection";

function DoubtDetailSection() {
  const classes = useStyles();

  return (
    <Container className={classes.root} disableGutters>
      <Box>
        <Box className={classes.headderContainer}>
          <Typography variant="h3" className={classes.questionTitle} gutterBottom>
            Laravel and Ajax Like system is saving multiple record of like to likes table ?
          </Typography>
          <ListItem>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="body2">Adarsh Kumar Singh</Typography>
              <Typography>4 days ago</Typography>
            </ListItemText>
          </ListItem>
        </Box>
        <Typography variant="h6" component="p" className={classes.questionDescription}>
          Trying to send create a like system in my laravel app with ajax , it works but when
          sending data to the likes table , it sends duplicates of the same like , about 5 of them ,
          i dont know why , when i do the same like function without the ajax , it works just fine
          without no problems , here&apos;s my code BLADE
        </Typography>
      </Box>
      <PostCommentSection />
      <Chip className={classes.totalAnswer} label="25 Answered" />
      <Divider className={classes.divider} />
      <CommentSection />
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
}));

export default DoubtDetailSection;
