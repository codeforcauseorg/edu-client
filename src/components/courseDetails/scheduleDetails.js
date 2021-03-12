import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { Divider, Grid, Box } from "@material-ui/core";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  heading: {
    padding: theme.spacing(2),
  },
  duration: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
  },
}));

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const ScheduleDetails = ({ chapter, duration, heading, details, premier, panel }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion square expanded={expanded === panel} onChange={handleChange(panel)}>
        <AccordionSummary
          expandIcon={<ArrowDropDownCircleOutlinedIcon fontSize="large" />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Grid container className={classes.heading} justify="center" alignItems="center">
            <Grid item xs={6} sm={8}>
              <Typography align="left" variant="h6">
                Chapter {chapter}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography className={classes.duration} align="right" component={"div"}>
                <Box fontStyle="italic">
                  Duration <b>{duration}</b>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.secondaryHeading} align="left">
                {heading} &nbsp;
                <span style={{ fontStyle: "italic", color: "purple" }}>{premier}</span>
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="left" className={classes.heading}>
            {details}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider />
    </div>
  );
};

export default ScheduleDetails;
