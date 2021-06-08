import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

function CourseDetail(props) {
  // const history = useHistory();
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
}

const useStyles = makeStyles((theme) => ({}));

export default CourseDetail;
