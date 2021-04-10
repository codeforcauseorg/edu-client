<<<<<<< HEAD
import {
  List,
  ListItem,
  makeStyles,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
=======
import { List, ListItem, makeStyles, AppBar, IconButton, Toolbar, Typography,} from "@material-ui/core";
>>>>>>> Header style changes
import ScrollToTop from "../../utils/ScrollToTop";
import WishlistCard from "../../components/wishlistCard";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import ScrollTop from "../../components/backTop/index";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
<<<<<<< HEAD
=======
import MoreVertIcon from "@material-ui/icons/MoreVert";

>>>>>>> Header style changes
const useStyles = makeStyles((theme) => ({
  root: {},
  li: {
    padding: "14px 0px",
  },
  backtotop: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: "#160050",
  },
}));

const WishListView = (props) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
<<<<<<< HEAD
          <IconButton edge="start" className={classes.backButton} color="inherit">
=======
          <IconButton edge="start" className={classes.backButton} color="inherit" aria-label="menu">
>>>>>>> Header style changes
            <ArrowBackIcon onClick={() => history.goBack()} />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            WishList
          </Typography>
<<<<<<< HEAD
=======
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MoreVertIcon />
          </IconButton>
>>>>>>> Header style changes
        </Toolbar>
      </AppBar>
      <div id="back-to-top-anchor"></div>
      <ScrollToTop />
      <List>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <ListItem key={index} className={classes.li}>
              <WishlistCard props={props} />
            </ListItem>
          );
        })}
      </List>
      <div className={classes.backtotop}>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
    </>
  );
};

export default WishListView;
