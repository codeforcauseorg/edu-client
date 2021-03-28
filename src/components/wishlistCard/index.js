import {
  Card,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";

import ButtonComponent from "../Button/ButtonComponent";
import { DeleteOutline } from "@material-ui/icons";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    margin: 0,
    // marginTop: '8px',
    borderRadius: "8px",
    "&:hover": {
      cursor: "pointer",
      transform: "translateY(-2px)",
    },
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
  title: {
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
}));

const WishlistCard = ({ id }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className={classes.root}>
      <Card>
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
              <DeleteOutline />
              {/* <IonIcon src={trashOutline} /> */}
            </IconButton>
          }
          className={classes.cardHeader}
          classes={{
            title: classes.title,
            subheader: classes.subheader,
          }}
        />
        <CardContent>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </Typography>
          <Typography variant="caption" className={classes.captionset}>
            Classes Starting <span style={{ color: "#a60000" }}>16th March Onwards</span>
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
  );
};

export default WishlistCard;
