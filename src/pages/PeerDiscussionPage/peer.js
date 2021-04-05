import {
  List,
  ListItem,
  ListItemText,
  Container,
  makeStyles,
  Box,
  Typography,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { AccountCircleOutlined } from "@material-ui/icons";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ScrollToTop from "../../utils/ScrollToTop";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import ScrollTop from "../../components/backTop/index";

const useStyles = makeStyles((theme) => ({
  MainTitle: {
    padding: theme.spacing(2),
    "& .MuiTypography-root": {
      fontSize: "1.4rem",
      fontWeight: 400,
    },
  },
  profiletitle: {
    padding: theme.spacing(2),
    fontSize: "20px",
    fontWeight: 400,
    color: "#0D0F44",
  },
  margin: {
    margin: theme.spacing(2),
  },
  navigationBar: {
    widht: "100%",
    height: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6px 10px",
  },

  searchSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 7px",
  },

  BoxSpaces: {
    padding: "15px",
  },

  Buttons: {
    padding: "15px",
  },
  backtotop: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 2,
  },
}));

export default function PeerPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const Items = [
    {
      id: 1,
      text: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
      onPress: () => console.log("Doubt Forum"),
    },
    {
      id: 2,
      text: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
      onPress: () => console.log("Interview your friend"),
    },
    {
      id: 3,
      text: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
      onPress: () => console.log("Contests and Statistics Dashboard"),
    },
    {
      id: 4,
      text: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
      onPress: () => console.log("Classroom"),
    },
  ];
  return (
    <Container>
      <ScrollToTop />
      <div className={classes.navigationBar}>
        <ArrowBackIcon className={classes.svg} onClick={() => history.goBack()} />
        <Box className={classes.MainTitle}>
          <Typography variant="h1">Discussion Form</Typography>
        </Box>
        <MoreVertIcon className={classes.svg} />
      </div>
      <Box>
        <Typography className={classes.profiletitle} variant="h5">
          Discussion Topic
        </Typography>
      </Box>
      <Divider />
      <Box className={classes.BoxSpaces}>
        <Typography variant="body2">
          Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of
          document.
        </Typography>
      </Box>
      <Box>
        <Typography className={classes.profiletitle} variant="h5">
          Responses
        </Typography>
      </Box>
      <Divider />
      <div className={classes.searchSection}>
        <AccountCircleOutlined />
        <div>
          <TextField id="outlined-basic" label="Type a Response" variant="outlined" />
          <Button className={classes.Buttons}>
            <ArrowForwardIosIcon />
          </Button>
        </div>
      </div>
      <Divider />

      <div className={classes.margin}>
        <Grid container spacing={2}>
          <Grid item>
            <AccountCircleOutlined />
          </Grid>
          <Grid item>
            <Typography variant="h5" style={{ display: "inline-block" }}>
              Lorem ( 27/03/2021 )
            </Typography>
          </Grid>
          <Box className={classes.BoxSpaces}>
            <Typography variant="body2">
              Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of
              document or a typeface without relying on meaningful content.
            </Typography>
          </Box>
        </Grid>
      </div>
      <Divider />

      <div className={classes.margin}>
        <Grid container spacing={2}>
          <Grid item>
            <AccountCircleOutlined />
          </Grid>
          <Grid item>
            <Typography variant="h5" style={{ display: "inline-block" }}>
              Ipsum ( 26/03/2021 )
            </Typography>
          </Grid>
          <Box className={classes.BoxSpaces}>
            <Typography variant="body2">
              Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of
              document or a typeface without relying on meaningful content.
            </Typography>
          </Box>
        </Grid>
      </div>
      <Divider />

      <div className={classes.margin}>
        <List
          subheader={
            <Typography variant="h5" className={classes.profiletitle}>
              Other Topics
            </Typography>
          }
        >
          {Items.map((items) => (
            <ListItem button key={items.id} onClick={items.onPress}>
              <ListItemText secondary={items.text} />
              <ArrowForwardIosIcon />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      <div className={classes.backtotop}>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
    </Container>
  );
}
