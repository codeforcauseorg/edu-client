import { useHistory } from "react-router-dom";
import { makeStyles, Typography, Avatar, Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "70px",
    height: "70px",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(3),
    color: "#000",
  },
  studentdetails: {
    marginLeft: "10px",
    padding: theme.spacing(1),
    "& .MuiTypography-h2": {
      fontSize: "1rem",
      fontWeight: 400,
      marginBottom: theme.spacing(0.5),
    },
    "& .MuiTypography-h3": {
      fontSize: ".75rem",
      fontWeight: 400,
      marginBottom: theme.spacing(0.5),
    },
  },
  editbutton: {
    marginTop: "10px",
    background: "#fff",
    textTransform: "none",
    borderRadius: "30px",
    border: "2px solid black",
    padding: "0 16px 0 16px",
    fontSize: "0.8rem",
  },
}));

function HeaderComponent() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Box className={classes.headerContainer}>
        <Avatar
          src="https://yt3.ggpht.com/ytc/AAUvwnhpLAOxx0GesrqkAMyNs3Fd3ZULf8yfNc8nTmMp=s900-c-k-c0x00ffffff-no-rj"
          className={classes.avatar}
        />
        <Box className={classes.studentdetails}>
          <Typography variant="h2">Code for Cause</Typography>
          <Typography variant="h3">team@codeforcause.org</Typography>
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
    </>
  );
}

export default HeaderComponent;
