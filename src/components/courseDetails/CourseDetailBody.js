import { useState } from "react";
import { Chip, Typography } from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import courseDetail from "../../data/courseDetail.json";

const scheduleData = courseDetail[0].scheduleSection;

const tagList = ["HTML", "CSS", "Javascript"];

const ScheduleDetails = ({ date, chapter, duration, heading, details, premier, panel }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.container}>
      <Accordion square expanded={expanded === panel} onChange={handleChange(panel)}>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon fontSize="large" />}
          aria-controls="panel1d-content"
          id="panel1d-header"
          className={classes.summary}
        >
          <div className={classes.date}>
            <Typography align="left" variant="h3">
              {date}
            </Typography>
            <Typography variant="body1">{duration}</Typography>
          </div>
          <div className={classes.detail}>
            <Typography className={classes.heading} align="left" variant="h3">
              Chapter {chapter}
            </Typography>
            <Typography align="left" variant="body1">
              {heading}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">{details}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const Details = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.description}>
          <Typography variant="h2" align="left" className={classes.heading}>
            Course Description
          </Typography>
          <Typography variant="body1" className={classes.descriptionText}>
            {props.description}
          </Typography>
        </div>
        <Typography variant="h2" align="left" className={classes.heading}>
          Course Schedule
        </Typography>
        <div>
          {scheduleData.map((chapter) => (
            <ScheduleDetails
              key={chapter.chapter}
              date={chapter.date}
              chapter={chapter.chapter}
              duration={chapter.duration}
              heading={chapter.heading}
              details={chapter.details}
              premier={chapter.premier}
              panel={chapter.panel}
            />
          ))}
        </div>
      </div>
      <div className={classes.description}>
        <Typography variant="h2" align="left" className={classes.heading}>
          Prerequisites
        </Typography>
        <div className={classes.tagContainer}>
          {tagList.map((item, index) => (
            <Chip
              key={index}
              className={classes.tag}
              label={
                <div style={{ display: "flex" }}>
                  <CheckCircleIcon style={{ marginRight: ".5rem", fontSize: "1.2rem" }} />
                  <Typography variant="body1">{item}</Typography>
                </div>
              }
            ></Chip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    margin: "0 5rem",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "0 auto",
    },
  },
  description: {
    margin: "4rem 0",
  },
  descriptionText: {
    margin: "2rem 0",
    fontSize: "1.15rem",
  },
  container: {
    width: "100%",
  },
  summary: {
    margin: "0",
  },
  date: {
    padding: ".5rem .5rem .5rem 0",
    width: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "2px dashed rgba(0, 0, 0, .25)",
    [theme.breakpoints.down("sm")]: {
      width: "25%",
    },
  },
  detail: {
    paddingLeft: "1rem",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
  },
  heading: {
    marginBottom: ".5rem",
  },
  tag: {
    marginRight: ".5rem",
    color: "#f4f4f4",
    cursor: "pointer",
    backgroundColor: "#3740A1",
    borderRadius: "5px",
  },
}));

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    marginBottom: "1rem",
  },
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .25)",
  },
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    border: "1px solid rgba(0, 0, 0, .25)",
    borderTop: "none",
  },
}))(MuiAccordionDetails);
