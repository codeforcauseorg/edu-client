import {
  Card,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ButtonComponent from "../Button/ButtonComponent";
import { DeleteOutline } from "@material-ui/icons";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    margin: 0,
    // marginTop: '8px',
    borderRadius: "8px",
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
}));

const WishlistCard = () => {
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
            <Typography variant="h3">
              Fullstack Web Development Course <br /> by code for cause
            </Typography>
          }
          subheader="90hrs of learning with Anuj Garg"
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </Typography>
          <Typography variant="caption" style={{ fontStyle: "italic" }}>
            Classes Starting <span style={{ color: "#a60000" }}>16th March Onwards</span>
          </Typography>
          <Typography variant="h3" color="secondary" style={{ margin: "4px 0px 6px" }}>
            ₹ 94
          </Typography>
          <ButtonComponent title="Checkout Now" onClick={() => history.push("/course")} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default WishlistCard;
