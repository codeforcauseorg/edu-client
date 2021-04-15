import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Container,
  Box,
  Card,
  CardHeader,
  CardContent,
  Chip,
  CardActions,
  Button,
} from "@material-ui/core";
import { ArrowBack, Tune, BookmarkBorder } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    background: "#fff",
    color: "#000",
    "& .MuiTypography-h6": {
      flexGrow: 1,
    },
    "& .MuiButton-root": {
      color: "#246A89",
    },
  },
  jobOpeningCard: {
    margin: theme.spacing(2),
    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
    "& .MuiCardHeader-title": {
      color: "#2A5298",
    },
  },
  labelChip: {
    marginLeft: theme.spacing(2),
    "& .MuiChip-root": {
      color: "#415FFF",
      background: "#DBE7FF",
      fontWeight: 600,
      borderRadius: 5,
    },
  },
  cardActions: {
    "& .MuiTypography-body1": {
      flexGrow: 1,
      marginLeft: theme.spacing(2),
    },
    "& .MuiButton-root": {
      background: "#50407C",
      color: "#fff",
      textTransform: "none",
    },
  },
}));
function JobOpenings() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.backButton} color="inherit" aria-label="menu">
            <ArrowBack onClick={() => history.goBack()} />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Job Openings
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <Tune />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box>
        {[...new Array(12)].map((items, index) => (
          <Card key={index} className={classes.jobOpeningCard}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <BookmarkBorder />
                </IconButton>
              }
              title="Frontend developer"
              subheader="Job ID: 101"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua...
              </Typography>
            </CardContent>

            <Box className={classes.labelChip}>
              <Chip size="small" label="Internship" />
            </Box>
            <CardActions disableSpacing className={classes.cardActions}>
              <Typography>March 27 2021</Typography>
              <Button>
                <Typography variant="caption">Apply to Website</Typography>
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default JobOpenings;
