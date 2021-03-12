import { Box, Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/accountActions";

function ProfilePage() {
  const dispatch = useDispatch();
  return (
    <Box display="flex" flexDirection="column">
      <Button onClick={() => dispatch(logout)}>Logout</Button>
    </Box>
  );
}

export default ProfilePage;
