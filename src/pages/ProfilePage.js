import { Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ProfileComponent from "../components/profileComponent/index";
import { logout } from "../actions/accountActions";

function ProfilePage() {
  const [recent, setRecent] = useState([
    { name: "help", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" },
    { name: "help", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" },
    { name: "help", info: "iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" },
    { name: "help", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" },
    { name: "help", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" },
    { name: "help", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" },
  ]);
  const dispatch = useDispatch();
  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{
        backgroundColor: "#8EC5FC",
        backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
        minHeight: "80%",
      }}
    >
      <ProfileComponent recent={recent} setRecent={setRecent} />
      <Button style={{ backgroundColor: "red" }} onClick={() => dispatch(logout)}>
        <b>Logout</b>
      </Button>
    </Box>
  );
}

export default ProfilePage;
