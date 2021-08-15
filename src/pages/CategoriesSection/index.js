import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import { ALL_COURSE_CARD_ENDPOINT } from "../../constants/apiEndpoints";
import { loadData } from "../../services/apiService";
import ExploreMediaCard from "../../components/CourseMediaCard/ExploreMediaCard";

function CategoriesSection() {
  const classes = useStyles();
  const { name } = useParams();

  const { data: courseData } = useSWR(ALL_COURSE_CARD_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const courseCard = courseData?.filter((course) => course?.tags?.includes(name));

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Typography variant="h1" className={classes.title}>
          {name}
        </Typography>
      </Box>
      <Box mt={5} mb={5} className={classes.innerContainer}>
        {courseCard?.length ? (
          <Grid container>
            {courseCard?.map((items) => {
              return (
                <Grid key={items._id} item xs={12} sm={6} md={6} lg={4} xl={3}>
                  <ExploreMediaCard props={items} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Box>
            <Typography variant="h4">Oops! no course available for this categorie :(</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  innerContainer: {
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
  },
  container: {
    position: "relative",
    background: "linear-gradient(90deg, #5848EA 0%, #9549EB 100%)",
    height: "20vh",
  },
  title: {
    position: "absolute",
    color: "#fff",
    bottom: 20,
    left: 60,
    [theme.breakpoints.down("md")]: {
      left: 30,
    },
  },
}));

export default CategoriesSection;
