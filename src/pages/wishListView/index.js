import {
  List,
  ListItem,
  makeStyles,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Container,
} from "@material-ui/core";
import ScrollToTop from "../../utils/ScrollToTop";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import ScrollTop from "../../components/backTop/index";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useState } from "react";
import DisplayMessage from "./DisplayMessage";
import { DeleteOutline } from "@material-ui/icons";

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
  cardHeader: {
    backgroundColor: "#A60000",
    color: "#fff",
  },
  icon: {
    color: "#fff",
    padding: "4px",
    fontSize: "14px",
  },
  title1: {
    fontWeight: 700,
    fontSize: "12px",
  },
  subheader: {
    fontStyle: "italic",
    fontSize: "10px",
    color: "rgb(255, 255, 255, 0.8)",
    marginTop: "8px",
    marginBottom: "-8px",
  },
  titlestyle: {
    marginBottom: theme.spacing(2),
  },
  subheaderstyle: {
    marginTop: "5px",
    fontStyle: "italic",
  },
  captionset: {
    fontStyle: "italic",
    margin: theme.spacing(2, 0),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  delButton: {
    cursor: "pointer",
  },
}));

const WishListView = ({ props, id }) => {
  const classes = useStyles();
  const history = useHistory();

  const defaultList = [{ index: "1" }, { index: "2" }, { index: "3" }, { index: "4" }];

  const [list, updateList] = useState(defaultList);

  const onDelete = (e) => {
    const index = e.target.getAttribute("index");
    updateList(list.filter((item) => item.index !== index));
  };

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.backButton}
            color="inherit"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            WishList
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div id="back-to-top-anchor"></div>
      <ScrollToTop />
      <List>
        {list.length === 0 ? (
          <DisplayMessage />
        ) : (
          list.map((item) => {
            return (
              <ListItem key={item.index} className={classes.li}>
                <Container className={classes.root}>
                  <Card props={props} onDelete={onDelete}>
                    <CardHeader
                      style={{
                        backgroundImage: "url(/assets/wishlist/2.png)",
                        backgroundSize: "cover",
                      }}
                      title={
                        <Typography variant="h5" className={classes.titlestyle}>
                          Fullstack Web Development Course <br /> by Code For Cause
                        </Typography>
                      }
                      subheader={
                        <Typography variant="subtitle2" className={classes.subheaderstyle}>
                          90hrs of learning with Anuj Garg
                        </Typography>
                      }
                      action={
                        <IconButton className={classes.icon}>
                          <DeleteOutline
                            className={classes.delButton}
                            index={item.index}
                            onClick={onDelete}
                          />
                        </IconButton>
                      }
                      className={classes.cardHeader}
                      classes={{
                        title: classes.title1,
                        subheader: classes.subheader,
                      }}
                    />
                    <CardContent>
                      <Typography variant="subtitle2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                      </Typography>
                      <Typography variant="caption" className={classes.captionset}>
                        Classes Starting{" "}
                        <span style={{ color: "#a60000" }}>16th March Onwards</span>
                      </Typography>
                      <Typography variant="body2" color="secondary">
                        ₹ 94
                      </Typography>
                      <ButtonComponent
                        className={classes.button}
                        title="Checkout Now"
                        onClick={() => history.push(`/course/${id}`)}
                      />
                    </CardContent>
                  </Card>
                </Container>
              </ListItem>
            );
          })
        )}
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
