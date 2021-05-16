import {
  Card,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { useRef } from "react";
import ButtonComponent from "../../../components/Button/ButtonComponent";
import { DeleteOutline } from "@material-ui/icons";
import { useHistory } from "react-router";
// import "./wishListComponent.css";
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    margin: 0,
    borderRadius: "8px",
    "&.removedItem": {
      animation: `$removed-item-animation 0.4s cubic-bezier(.55,-0.04,.91,.94) forwards`,
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
  listItem: {
    transition: " all 0.4s ease-out",
  },
  "@keyframes removed-item-animation": {
    from: {
      opacity: 1,
      transform: "scale(1)",
    },
    to: {
      opacity: 0,
      height: "0px",
      transform: "scale(0)",
    },
  },
}));

const WishlistCardComponent = ({ props, onClick }) => {
  const classes = useStyles();
  const history = useHistory();
  const deleteButton = useRef();

  const handleDelete = () => {
    deleteButton.current.classList.add("removedItem");
  };
  return (
    <Container
      classes={{ root: classes.root, removedItem: classes.removedItem }}
      ref={deleteButton}
    >
      <ListItem className={classes.listItem}>
        <Card variant="outlined">
          <CardHeader
            style={{
              backgroundImage: "url(/assets/wishlist/2.png)",
              backgroundSize: "cover",
            }}
            title={
              <Typography variant="h5" className={classes.titlestyle}>
                {props.title}
              </Typography>
            }
            subheader={
              <Typography variant="subtitle2" className={classes.subheaderstyle}>
                {props.duration} of learning with Anuj Garg
              </Typography>
            }
            action={
              <IconButton className={classes.icon} onClick={handleDelete}>
                <DeleteOutline />
              </IconButton>
            }
            className={classes.cardHeader}
            classes={{
              title: classes.title,
              subheader: classes.subheader,
            }}
          />
          <CardContent>
            <Typography variant="subtitle2">{props.description}</Typography>
            <Typography variant="caption" className={classes.captionset}>
              Classes Starting <span style={{ color: "#a60000" }}>{props.startDate} Onwards</span>
            </Typography>
            <Typography variant="body2" color="secondary">
              ₹ {props.price}
            </Typography>
            <ButtonComponent
              className={classes.button}
              title="Checkout Now"
              onClick={() => history.push(`/checkout/${props.id}`)}
            />
          </CardContent>
        </Card>
      </ListItem>
    </Container>
  );
};

export default WishlistCardComponent;
