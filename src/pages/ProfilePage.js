import { Box, Button } from "@material-ui/core";
import React from "react";
import ScrollToTop from "../utils/ScrollToTop";
import { useDispatch } from "react-redux";
import { logout } from "../actions/accountActions";

function ProfilePage() {
  const dispatch = useDispatch();
  return (
    <Box display="flex" flexDirection="column">
      <ScrollToTop />
      <Button onClick={() => dispatch(logout)}>Logout</Button>
    </Box>
  );
}

export default ProfilePage;
