import { useState } from "react";
import { useHistory } from "react-router-dom";
import Hero from "../../components/courseDetails/Hero";
import { makeStyles } from "@material-ui/core/styles";
import courseDetail from "../../data/courseDetail.json";
import Details from "../../components/courseDetails/CourseDetailBody";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles((theme) => ({
}));

const heroData = courseDetail[0].heroSection;
const descriptionData = courseDetail[0].descriptionSection;

function CourseDetail(props) {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.navigation}>
        <ArrowBackIcon className={classes.svg} onClick={() => history.goBack()} />
        <MoreVertIcon className={classes.svg} onClick={handleClick} />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Cart</MenuItem>
        </Menu>
      </div>
      <div className={classes.courseDetail}>
        <Hero
          title={heroData.title}
          description={heroData.description}
          startDate={heroData.startDate}
          duration={heroData.duration}
          languages={heroData.languages}
          thumbnail={heroData.thumbnail}
          videoUrl={heroData.videoUrl}
          price={heroData.price}
        />
        <Details description={descriptionData.description} mentors={descriptionData.mentors}/>
      </div>
    </>
  );
}

export default CourseDetail;
