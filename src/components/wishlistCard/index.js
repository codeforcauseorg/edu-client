import {
  Card,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from './style';
import ButtonComponent from "../Button/ButtonComponent";
import { DeleteOutline } from "@material-ui/icons";
import { useHistory } from "react-router";



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
            <Typography variant="h2" style={{ marginBottom:'2px' }}>
              Fullstack Web Development Course <br /> by code for cause
            </Typography>
          }
          subheader={
            <Typography style={{ fontSize: "14px", marginTop:'5px' }}>
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
          <Typography style={{ fontSize: "14px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </Typography>
          <Typography variant="caption" style={{ fontStyle: "italic", fontSize: "14px" }}>
            Classes Starting <span style={{ color: "#a60000" }}>16th March Onwards</span>
          </Typography>
          <Typography variant="h3" color="secondary" style={{ margin: "4px 0px 6px", fontSize: "13.1px" }}>
            ₹ 94
          </Typography>
          <ButtonComponent title="Checkout Now" onClick={() => history.push("/course")} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default WishlistCard;
