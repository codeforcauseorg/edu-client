import React from "react";
import { makeStyles, Typography, Avatar, Box, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  editbutton: {
    marginTop: "5px",
    background: "tansparent",
    textTransform: "none",
    padding: "0 16px 0 16px",
    border: "2px solid #FFFFFF",
    boxSizing: "border-box",
    borderRadius: "10px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "15px",
    color: "#ffff",
  },
  heroSection: {
    minHeight: 200,
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(10),
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 35,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    marginBottom: theme.spacing(10),
  },
  avatar: {
    height: 120,
    width: 120,
    border: "2px solid #ffff",
  },
  infoContainer: {
    color: "#fff",
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginLeft: theme.spacing(0),
      marginTop: theme.spacing(3),
    },
  },
  studentNameId: {
    fontFamily: "Montserrat",
    color: "FFFFFF",
    fontStyle: "normal",
    fontWeight: "normal",
  },
  studentName: {
    fontFamily: "Montserrat",
    fontSize: "25px",
    color: "FFFFFF",
    fontStyle: "normal",
    fontWeight: "normal",
  },
  studentScore: {
    background: "#FFFFFF",
    border: "1px solid #3740A1",
    boxSizing: "border-box",
    borderRadius: "50px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    textAlign: "center",
    color: "#3740A1",
    padding: "6px",
    position: "relative",
    marginTop: "-18px",
  },
}));

function HeaderComponent() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Box className={classes.heroSection}>
        <Box>
          <Avatar src="#" className={classes.avatar} />
          <div className={classes.studentScore}>3000</div>
        </Box>
        <Box className={classes.infoContainer}>
          <Typography className={classes.studentName}>Adarsh Kumar Singh</Typography>
          <Box mt={2} className={classes.studentNameId}>
            <Typography>adarshkumarsingh865@gmail.com</Typography>
          </Box>
          <Box mt={3}>
            <Button
              variant="outlined"
              className={classes.editbutton}
              onClick={() => {
                history.push("/editprofile");
              }}
            >
              Edit Profile
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HeaderComponent;
