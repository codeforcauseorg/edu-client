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
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Discussion from "../../components/Discussion";

const useStyles = makeStyles((theme) => ({
  profiletitle: {
    padding: theme.spacing(2),
    "& .MuiTypography-root": {
      fontSize: "1.3rem",
      fontWeight: 400,
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default function PeerPage() {
  const classes = useStyles();

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

  const Items1 = [
    {
      id: 1,
      name: "Dev",
      text: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
      onPress: () => console.log("Doubt Forum"),
    },
    {
      id: 2,
      name: "ADev",
      text: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
      onPress: () => console.log("Interview your friend"),
    },
    {
      id: 3,
      name: "BDev",
      text: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
      onPress: () => console.log("Contests and Statistics Dashboard"),
    },
    {
      id: 4,
      name: "JaiDev",
      text: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
      onPress: () => console.log("Classroom"),
    },
  ];

  return (
    <Container>
      <Box className={classes.profiletitle}>
        <Typography variant="h2">Discussion Form</Typography>
      </Box>
      <Box>
        <Typography className={classes.profiletitle} variant="h5">
          Discussion Topic
        </Typography>
      </Box>
      <Divider />
      <Box style={{ padding: "10px" }}>
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
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={2}>
            <Avatar className={classes.orange}>N</Avatar>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Type a Response"
              variant="outlined"
              style={{ width: "140%" }}
            />
          </Grid>
          <Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
            <Button style={{ marginLeft: "50px" }}>
              <ArrowForwardIosIcon style={{ fontSize: "large", marginTop: "-10px" }} />
            </Button>
          </Grid>
        </Grid>
      </div>
      <Divider />

      {Items1.map((data, index) => {
        return <Discussion data={data} key={index} />;
      })}

      <div className={classes.margin}>
        <List subheader={<Typography variant="h5">Other Topics</Typography>}>
          {Items.map((items) => (
            <ListItem button key={items.id} onClick={items.onPress}>
              <ListItemText secondary={items.text} />
              <ArrowForwardIosIcon />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
    </Container>
  );
}
