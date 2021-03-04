import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Typography, Dialog, DialogContent, Box } from '@material-ui/core';
import authService from '../../../services/authService';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { dismissLogin } from '../../../actions/accountActions';

function LoginDialog() {
  const user = useSelector(state => state.account.user);
  const loginFlag = useSelector(state => state.account.login);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(dismissLogin());
  };

  return (
    <Dialog
      open={!user && !!loginFlag}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent
        style={{
          background: '#E2E9FF'
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={2}
          mb={2}
        >
          <Typography
            variant="h3"
            style={{
              marginBottom: '8px'
            }}
          >
            Login / Sign Up
          </Typography>

          <Typography variant="body2">Explore learning with</Typography>

          <Typography
            variant="body2"
            style={{
              marginBottom: '12px'
            }}
          >
            Open Source
          </Typography>

          <StyledFirebaseAuth
            uiConfig={authService.uiConfig}
            firebaseAuth={authService.firebase.auth()}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
