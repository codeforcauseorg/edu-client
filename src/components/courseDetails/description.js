import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Avatar, Divider } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {},
  description: {},
  mentors: {},
  margin: {
    margin: theme.spacing(2, 0),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  divider: {
    width: "1px",
    backgroundColor: "black",
    marginRight: "10px",
  },
}));

const Description = ({ description, mentors }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={clsx(classes.heading, classes.margin)}>
        Course Description
      </Typography>
      <Box className={clsx(classes.description, classes.margin)}>
        <Typography variant="body2">{description}</Typography>
      </Box>
      <Typography variant="h2" className={clsx(classes.mentors, classes.margin)}>
        Course Mentors
      </Typography>
      <Box display="flex" justifyContent="space-between" mb={4}>
        {mentors.map((mentor) => (
          <Box key={mentor.id} display="flex" alignItems="center">
            {mentor.id === 2 ? <Divider orientation="vertical" className={classes.divider} /> : ""}
            <Avatar alt={mentor.title} src={mentor.image} />
            <Box margin={1} fontStyle="italic">
              <Typography variant="h5" color="primary">
                {mentor.name}
              </Typography>
              <Typography variant="subtitle2">{mentor.title}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Description;
