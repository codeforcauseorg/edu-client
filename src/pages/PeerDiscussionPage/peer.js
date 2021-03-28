import { List,
    ListItem,
    ListItemText,Container,makeStyles,  Box, Typography } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
// import MUIRichTextEditor from 'mui-rte';
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { AccountCircleOutlined} from "@material-ui/icons";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
//   root: {
//     background: "linear-gradient(180deg, #17003C 0%, rgba(0, 0, 0, 0) 100%)",
//     color: "#fff",
//     paddingBottom: "120px",
//   },
//   heading: {
//     padding: "40px 0px 12px",
//   },
//   img: {
//     borderRadius: "6px",
//     marginTop: "18px",
//     width: "100%",
//   },
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
}));

export default function PeerPage() {
  const classes = useStyles();

  const Items = [
    {
      id: 1,
      text: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document",
      onPress: () => console.log("Doubt Forum"),
    },
    {
      id: 2,
      text: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document",
      onPress: () => console.log("Interview your friend"),
    },
    {
      id: 3,
      text: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document",
      onPress: () => console.log("Contests and Statistics Dashboard"),
    },
    {
      id: 4,
      text: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document",
      onPress: () => console.log("Classroom"),
    },
  ];

//   myChangeHandler = (event) => {
//     this.setState({username: event.target.value});
//   }

  return (
    <Container>
      <Box className={classes.profiletitle}>
        <Typography variant="h2">Discussion Form</Typography>
      </Box>
      <Box>
        <Typography className={classes.profiletitle} variant="h5">Discussion Topic</Typography>
      </Box>
      <Divider />
      <Box style={{padding: "10px"}}>
        <Typography variant="p">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document .</Typography>
      </Box>
      <Box>
        <Typography className={classes.profiletitle} variant="h5">Responses </Typography>
      </Box>
      <Divider />
      
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <AccountCircleOutlined style={{height: "40px"}}/>
          </Grid>
          <Grid item>
            <TextField id="outlined-basic" label="Type a Response" variant="outlined" style={{width: "150%"}}/>
          </Grid>
          <Grid item>
            <Button style={{marginLeft: "50px"}}><ArrowForwardIosIcon /></Button>
          </Grid>
        </Grid>
      </div>
      <Divider />

      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircleOutlined style={{height: "40px"}}/>
          </Grid>
          <Grid item>
            <Typography variant="p" style={{display: 'inline-block'}}>Lorem ( 27/03/2021 ) </Typography>
            {/* <TextField id="outlined-basic" label="Type a Response" variant="outlined" style={{width: "340px"}} /> */}
          </Grid>
          <Box style={{padding: "10px"}}>
                <Typography variant="p">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Typography>
            </Box>
        </Grid>
      </div>
      <Divider />

      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircleOutlined style={{height: "40px"}}/>
          </Grid>
          <Grid item>
            <Typography variant="p" style={{display: 'inline-block'}}>Ipsum ( 26/03/2021 )</Typography>
            {/* <TextField id="outlined-basic" label="Type a Response" variant="outlined" style={{width: "340px"}} /> */}
          </Grid>
          <Box style={{padding: "10px"}}>
                <Typography variant="p">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Typography>
            </Box>
        </Grid>
      </div>
      <Divider />

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
