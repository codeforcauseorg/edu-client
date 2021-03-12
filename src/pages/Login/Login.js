import React from 'react';
import { useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';

import {
  Typography,
  Button,
  Avatar,
  CircularProgress,
  makeStyles
} from '@material-ui/core';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import {login } from '../../actions/accountActions';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container:{
    backgroundColor: theme.palette.secondary.main,
  }
}));


function Login(){
  const user = useSelector(state => state.account.user);
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleLoginOpen =() => {
    try{
      dispatch(login());
    }
    catch(err){
      console.log(err)
    }

 };


 return (
   <Container component="main" maxWidth="xs" >
     <CssBaseline />
     <div className={classes.paper}>
       <Avatar className={classes.avatar}>
         <LockOutlinedIcon />
       </Avatar>
       <Typography component="h1" variant="h5">
         Log in
       </Typography>
       <form className={classes.form} noValidate>
         <TextField
           variant="outlined"
           margin="normal"
           required
           fullWidth
           id="email"
           label="Email Address"
           name="email"
           autoComplete="email"
           autoFocus
         />
         <TextField
           variant="outlined"
           margin="normal"
           required
           fullWidth
           name="password"
           label="Password"
           type="password"
           id="password"
           autoComplete="current-password"
         />
         <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <Typography component="h1" variant="subtitle1">Login</Typography>
          </Button>
         <Button
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={handleLoginOpen}
                style={{
                  textTransform: 'capitalize'
                }}
              >
                {user === undefined ? (
                  <CircularProgress size="24px" color="inherit" />
                ) : (
                  <Typography component="h1" variant="subtitle1">Login With Google</Typography>
                )}
          </Button>

       </form>
     </div>

   </Container>
 );

}

export default Login
